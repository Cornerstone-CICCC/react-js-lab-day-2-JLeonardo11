
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface User {
  name: string;
  loggedIn: boolean;
}

interface UserContextType {
  user: User;
  login: (name: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: { name: '', loggedIn: false },
  login: () => {},
  logout: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({ name: '', loggedIn: false });

  const login = (name: string) => setUser({ name, loggedIn: true });
  const logout = () => setUser({ name: '', loggedIn: false,  });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
