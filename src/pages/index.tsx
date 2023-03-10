import Link from "next/link";
import styles from "../styles/SignUp.module.scss";

export default function SignIn() {
  return (
    <main className={styles.container}>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Sign In</button>

        <hr />

        <Link href="/signUp">Sign Up</Link>
      </form>
    </main>
  );
}
