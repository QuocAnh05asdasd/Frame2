import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: number;
  email: string;
  role?: string;
};

interface UserContextType {
  user: User | null;
  login: (user: User) => void; // () => void
  logout: () => void;
}

// B1: Tạo Context để quản lý dữ liệu người dùng
export const UserContext = createContext<UserContextType | null>(null);

// B2: Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  // state loading
  // useEffect: localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
  }, []);

  const login = (user: User) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
