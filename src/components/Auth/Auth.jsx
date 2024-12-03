import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <div>
        <ul className={styles.menu}>
          <li className={styles.link}>Sign in</li>
          <li className={styles.link}>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Auth;
