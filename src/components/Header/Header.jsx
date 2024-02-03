// import Logo from "../Logo/Logo";
import MenuBurger from "../MenuBurger/MenuBurger";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderWrapper, ThemeSwitcherWrapper, UserData } from "./Header.styled";
import PropTypes from "prop-types";

export default function Header({ toggleTheme, handleAsideHide }) {
  return (
    <HeaderWrapper>
      <MenuBurger handleAsideHide={handleAsideHide} />
      <ThemeSwitcherWrapper>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <UserData>
          <p>John</p>
          <span>img</span>
        </UserData>
      </ThemeSwitcherWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func,
  handleAsideHide: PropTypes.func,
};
