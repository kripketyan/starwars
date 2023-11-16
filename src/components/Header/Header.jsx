import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

import Favorite from "@components/Favorite";

import imgDroid from "./img/droid.svg";
import imgLightSabers from "./img/light-sabers.svg";
import imgDeathStar from "./img/death-star.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgDeathStar);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSabers);
        break;
      case THEME_DARK:
        setIcon(imgDeathStar);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;

      default:
        setIcon(imgDeathStar);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars"></img>

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
