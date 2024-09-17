import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss"; // Import the SCSS module
import { IoIosLogOut } from "react-icons/io";

function Header() {
  const isAuthenticated = false;
  const isLoggingOut = false;
  function handleLogout() {}
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/">CoLearn</Link>
          </div>

          {/* Action Button */}
          <div className={styles.actionButtons}>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  styleType="remove"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  <IoIosLogOut />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button styleType="login">Login</Button>
                </Link>
                <Link to="/auth">
                  <Button styleType="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
