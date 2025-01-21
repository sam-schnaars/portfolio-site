import styles from "./Nav.module.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "../../siteData";
import { NavItems } from "./NavItems";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const { linkedin, twitter } = siteData;

  return (
    <>
      <nav className={styles.main_nav}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src="/favicon.jpg"
              alt="@touseefcodes logo"
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
        </div>
        <header className={styles.links}>
          {NavItems.map(({ id, name, path }) => (
            <Link href={path} key={id}>
              {name}
            </Link>
          ))}
        </header>
        <div className={styles.hamburger} onClick={() => setMenu(!menu)}>
          <div className={styles.ham_logo}>
            <Image
              src={`/icons/hamburger.svg`}
              alt="@touseefcodes hamburger"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
          {menu ? (
            <header className={styles.links_mobile}>
              {/* nav items goes here  */}
              {NavItems.map(({ id, name, path }) => (
                <Link href={path} key={id}>
                  {name}
                </Link>
              ))}
            </header>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
