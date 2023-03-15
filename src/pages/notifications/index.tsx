import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function Notifications() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Sidebar />
        <div className={styles.content}>notifications</div>
      </main>
    </div>
  );
}
