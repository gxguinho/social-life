import styles from "./styles.module.scss";

export function NewPost() {
  return (
    <section className={styles.container}>
      <main>
        <img src="https://i.pravatar.cc/300" />
        <textarea placeholder="new post"></textarea>
      </main>

      <footer>
        <button>Post</button>
      </footer>
    </section>
  );
}
