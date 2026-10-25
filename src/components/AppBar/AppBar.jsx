import { Nav } from "../Nav/Nav";
import styles from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import avatar from "../../assets/react.svg";
import { useContext} from "react";
import authContext from "../contexts/authContext";
export const AppBar = () => {
  const {isLoggedIn,login,logout,user} = useContext(authContext)
  
  return (
    <header className={styles.header}>
      <Nav />
      {isLoggedIn ? (
        <UserMenu user={user} onLogout={logout} />
      ) : (
        <button type="button" onClick={login}>
          Login
        </button>
      )}
    </header>
  );
}