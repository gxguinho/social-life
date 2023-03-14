import { NavLink } from "./NavLink";
import { Chats, ChartPieSlice, Bell } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <section>
        <NavLink icon={ChartPieSlice} href="/home">
          Feed
        </NavLink>
        <NavLink icon={Bell} href="/notifications">
          Notifications
        </NavLink>
        <NavLink icon={Chats} href="/messages">
          Messages
        </NavLink>
      </section>
    </aside>
  );
}
