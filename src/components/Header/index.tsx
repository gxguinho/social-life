import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        social
        <span>.</span>
        <span>life</span>
      </h1>

      <label className={`${styles.search_input} ${styles.active}`}>
        <MagnifyingGlass size={20} />
        <input
          type="text"
          placeholder="busque no social.life"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && <X size={20} onClick={() => setSearch("")} />}
      </label>

      <div className={styles.profile}>
        <img src="https://i.pravatar.cc/300" />

        <div>
          <h4>Gabriel</h4>
          <p>@Gxguinho</p>
        </div>
      </div>
    </header>
  );
}
