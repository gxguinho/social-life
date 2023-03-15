import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function Messages() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Sidebar />
        <div className={styles.content}>Messages</div>
      </main>
    </div>
  );
}
