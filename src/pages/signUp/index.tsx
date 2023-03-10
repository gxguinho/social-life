import Link from "next/link";
import styles from "./styles.module.scss";

export default function SignUp() {
  return (
    <main className={styles.container}>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Sign Up</button>

        <hr />

        <Link href="/">Sign In</Link>
      </form>
    </main>
  );
}
