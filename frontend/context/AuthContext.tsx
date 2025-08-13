import { authService } from "@/services/authService";
import { userInfo } from "@/types/user";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
  user: userInfo | null;
  setUser: (u: userInfo | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
}
);

export function AuthProvider ({children} : {children: ReactNode}) {
    const [user, setUser] = useState<userInfo | null >(null)
     return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}