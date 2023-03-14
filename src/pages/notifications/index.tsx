import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";

export default function Notifications() {
  return (
    <div className={styles.container}>
      <main>
        <Sidebar />
        <div className={styles.content}>Notifications</div>
      </main>
    </div>
  );
}
