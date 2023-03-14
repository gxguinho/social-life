import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ children, href, icon: Icon }: NavLinkProps) {
  return (
    <ActiveLink href={href} activeClassName={styles.active}>
      <p>
        <Icon size={28} color="#FFF" />
        <span>{children}</span>
      </p>
    </ActiveLink>
  );
}
