import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { NewPost } from "@/components/Posts/NewPost";
import { Post } from "@/components/Posts/Post";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Sidebar />
        <div className={styles.content}>
          <NewPost />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}
