// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { useNavigate } from "react-router-dom";
// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User | null;
//   login: (email: string, password: string) => boolean;
//   logout: () => void;
// }

// interface User {
//   name: string;
//   email: string;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<User | null>(null);
//   const navigate = useNavigate();

//   const login = async (email: string, password: string) => {
//     try {
//       const res = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ useremail: email, password }),
//       });

//       const data = await res.json();
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         fetchUserData(data.token);
//         navigate("/profile"); // Redirect to profile after login
//       } else {
//         console.error("Invalid login");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const fetchUserData = async (token: any) => {
//     try {
//       const res = await fetch("http://localhost:5000/user", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const userData = await res.json();
//       setUser(userData);
//     } catch (error) {
//       console.error("User fetch error:", error);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }