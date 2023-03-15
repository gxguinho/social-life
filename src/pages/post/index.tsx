import styles from "./styles.module.scss";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Post as PostCard } from "@/components/Posts/Post";
import { Comment } from "@/components/Comment";

export default function Post() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Sidebar />
        <div className={styles.content}>
          <PostCard />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </main>
    </div>
  );
}
