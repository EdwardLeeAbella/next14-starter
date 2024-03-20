"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={item.link}
        className={`${styles.container} ${
          pathName === item.link && styles.active
        }`}
      >
        {item.name}
      </Link>
    </div>
  );
};

export default NavLink;
