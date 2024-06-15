import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface UserContextType {
  //TODO tipar o user
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
  //TODO tipar o user
  const [user, setUser] = useState<any>(null);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext needs to be user within a UserProvide");
  }

  return context;
};

export default UserProvider;
