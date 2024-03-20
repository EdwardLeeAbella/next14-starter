import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
const Links = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {Links.map((links) => (
        <NavLink item={links} key={links.name} />
      ))}
      {session ? (
        <>
            {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
            <button>
                Logout
            </button>
        </>
      ) : (
        <NavLink item={{ name: "Login", link: "/login" }} />
      )}
    </div>
  );
};
export default Links;
