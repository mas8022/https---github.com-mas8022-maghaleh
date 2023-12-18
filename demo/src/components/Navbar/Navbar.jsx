import "./Navbar.css";
import "./Navbar-media.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function Navbar() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="navbar sh">
        <div className="navbar__right">
          <img
            onClick={() => setFlag(true)}
            className="loginBtnMobile"
            src="../../../public/images/ham.svg"
            alt="list"
          />
          <img
            className="image"
            src="../../../public/images/logo.png"
            alt="logo"
          />
          <div className="category">
            <img
              className="navbar__category__icon image"
              src="../../../public/images/category.svg"
              alt="category"
            />

            <span>دسته بندی ها</span>
          </div>

          <div className="searchBar">
            <SearchIcon
              className="searchBar__icon center"
              style={{ fontSize: 35 }}
            />
            <input type="text" placeholder="جستجوی اموزش..." />
          </div>
        </div>

        <img
          className="loginBtnMobile image"
          src="../../../public/images/login.svg"
          alt="login"
        />

        <div className="navbar__left">

          <img
            className="navbar__left__icon image"
            src="../../../public/images/basket.svg"
            alt="basket"

          />
          <img
            className="image navbar__contact__icon"
            src="../../../public/images/contact.svg"
            alt="basket"

          />
          <p className="loginBtn">ورود / ثبت نام</p>
        </div>
      </div>

      <div
        className={
          flag ? "sidebar sidebarActive sh" : "sidebar deActiveSidebar sh"
        }
      >
        <img
          onClick={() => setFlag(false)}
          className="sidebar__existIcon"
          src="../../../public/images/exist.svg"
          alt="exist"
        />
        <div className="profileSidebar">
          <div className="profileSidebar__emptyProfile center">
            ابتدا لاگین کنید تا پروفالتان در دسترس شما قرار گیرد
          </div>
        </div>

        <ul className="sidebar__menu">
          <li className="sidebar__menu__item">
            <img
              className="ssidebar__menu__item"
              src="../../../public/images/category.svg"
              alt="category"
            />
            دسته بندی ها
          </li>
          <li className="sidebar__menu__item">
            <img src="../../../public/images/basket.svg" alt="basket" />
            سبد خرید
          </li>
          <li className="sidebar__menu__item">
            <img src="../../../public/images/contact.svg" alt="basket" />
            تماس با ما
          </li>
        </ul>

        <div className="companyPhoneNumber">
          <div>
            +012 793 5729
            <br />
            +98 933 453 3223
          </div>
          <img src="../../../public/images/logo.png" alt="" />
        </div>
      </div>
    </>
  );
}
