import { PaperPlaneRight } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function Post() {
  const { push } = useRouter();

  return (
    <div className={styles.container} onClick={() => push("/post")}>
      <header>
        <img src="https://i.pravatar.cc/300" />
        <div>
          <p>Jose Robson</p>
          <p>15h.</p>
        </div>
      </header>

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt
          libero animi perspiciatis labore nostrum nam aperiam, temporibus
          corrupti, ab placeat adipisci nisi consequuntur? Delectus cum quis
          quos necessitatibus ipsam.
        </p>

        <div>
          <p>3 comments</p>
          <p>17 share</p>
          <p>20 Fav</p>
        </div>
        <hr style={{ marginTop: 24 }} />

        <div className={styles.buttonsWrapper}>
          <button>Like</button>
          <button>Rt</button>
        </div>
        <hr style={{ marginBottom: 24 }} />
      </main>

      <footer>
        <img src="https://i.pravatar.cc/300" />
        <textarea placeholder="write a comment"></textarea>
        <button>
          <PaperPlaneRight size={28} />
        </button>
      </footer>
    </div>
  );
}
