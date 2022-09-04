import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  token: string;
  user: object;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
  location: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface IAuthProviderProps {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signInwithGoogle(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthProviderProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@GoBarber:token",
        "@GoBarber:user",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }
    loadStorageData();
  }, []);

  const userStorageUseKey = "@melhoraMaisApp:use";
  const userStorageTokenKey = "@melhoraMaisApp:token";

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/login", {
      email,
      password,
    });

    console.log("response", response.data);

    const { access_token, user } = response.data;

    await AsyncStorage.setItem(userStorageTokenKey, access_token);
    await AsyncStorage.setItem(userStorageUseKey, JSON.stringify(user));

    setUser(user);

    // setData({ access_token, user });
  }, []);

  async function signInwithGoogle() {
    try {
      const CLIENT_ID =
        "844936596123-qsr4qlub14eb79o40mv5r0o39dgmvhm2.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@loureiro_12/app";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.give_name,
          photo: userInfo.picture,
        };
        setUser(userLogged);
        await AsyncStorage.setItem(
          userStorageUseKey,
          JSON.stringify(userLogged)
        );
      }
    } catch (error) {
      setUserStorageLoading(false);
      console.log(error);
    }
  }

  async function signOut() {
    AsyncStorage.removeItem(userStorageUseKey);
    AsyncStorage.removeItem(userStorageTokenKey);

    setData({} as AuthState);
    setUser({} as User);
  }

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem(userStorageUseKey);

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User;
        setUser(userLogged);
        setUserStorageLoading(false);
      }
    }
    loadUserStorageDate();
    // signOut();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signInwithGoogle,
        signOut,
        userStorageLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
