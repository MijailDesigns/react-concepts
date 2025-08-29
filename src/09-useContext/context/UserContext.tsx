import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/usermock.data";

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
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAutStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAutStatus("authenticated");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAutStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    }

    handleLogout();
  }, []);

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
