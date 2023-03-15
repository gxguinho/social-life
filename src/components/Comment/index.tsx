import styles from "./styles.module.scss";

export function Comment() {
  return (
    <article className={styles.container}>
      <img src="https://i.pravatar.cc/300" />
      <div>
        <div>
          <section>
            <p>Jose Robson</p>
            <div />
            <p>15 h</p>
          </section>
          <p>@gxguinho</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptas laudantium accusamus necessitatibus quaerat accusantium
          reprehenderit, temporibus quidem quasi. Vel fuga asperiores, sunt
          consequuntur sint cum a enim repellat quam.
        </p>
      </div>
    </article>
  );
}
