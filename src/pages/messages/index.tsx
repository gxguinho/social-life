import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";

export default function Messages() {
  return (
    <div className={styles.container}>
      <main>
        <Sidebar />
        <div className={styles.content}>messages</div>
      </main>
    </div>
  );
}
