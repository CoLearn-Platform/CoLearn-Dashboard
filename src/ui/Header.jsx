import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { logout } from "../services/apiAuth";
import { removeUser } from "../features/users/userSlice";

import Button from "./Button";
import styles from "./Header.module.scss"; // Import the SCSS module
import toast from "react-hot-toast";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAuthenticated;

  const { mutate: mutateLogout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      dispatch(removeUser());
    },
    onError: (error) => {
      toast.error("Error in logging out");
    },
  });

  function handleLogout() {
    mutateLogout();
    Navigate("/");
  }
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
              <Button
                styleType="danger"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                LOGOUT
              </Button>
            ) : (
              <Link to="/auth">
                <Button styleType="primary">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
