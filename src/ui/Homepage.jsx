import { Link } from "react-router-dom";
import styles from "./Homepage.module.scss";
import Button from "./Button";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to the Admin Panel</h1>
        <p className={styles.description}>
          Please log in to manage the platform. Here you can manage users,
          projects, learning rooms, and more.
        </p>
        <div className={styles.actions}>
          <Link to="/auth">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
