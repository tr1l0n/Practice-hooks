import authContext from './authContext' 
import avatar from '@/assets/react.svg'
import { useState } from 'react';
export default  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
      setUser({ name: "Andriy", avatar });
      setIsLoggedIn(true);
    };
    const logout = () => {
      setUser(null);
      setIsLoggedIn(false);
    };
    const providerValue = {
      login,
      logout,
      isLoggedIn,
      user,
    };
    return (
        <authContext.Provider value={providerValue}>
            {children}
        </authContext.Provider>
    )
}