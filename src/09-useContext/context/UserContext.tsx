import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/usermock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AutStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  // state
  authStatus: AutStatus;
  user: User | null;

  // methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAutStatus] = useState<AutStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log({ userId });
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <UserContext
      value={{
        authStatus: auth,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};

export default UserContextProvider;
