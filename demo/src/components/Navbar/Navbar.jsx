import "./Navbar.css";
import "./Navbar-media.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link to={"/"}>
            <img
              className="image"
              src="../../../public/images/logo.png"
              alt="logo"
            />
          </Link>
          <Link className="link" to={"/categories"}>
            <div className="category">
              <img
                className="navbar__category__icon image"
                src="../../../public/images/category.svg"
                alt="category"
              />

              <span>دسته بندی ها</span>
            </div>
          </Link>

          <div className="searchBar">
            <SearchIcon
              className="searchBar__icon center"
              style={{ fontSize: 35 }}
            />
            <input type="text" placeholder="جستجوی اموزش..." />
          </div>
        </div>

        <Link to={"/login"}>
          <img
            className="loginBtnMobile image"
            src="../../../public/images/login.svg"
            alt="login"
          />
        </Link>

        <div className="navbar__left">
          <Link to={"/basket"}>
            <img
              className="navbar__left__icon image"
              src="../../../public/images/basket.svg"
              alt="basket"
            />
          </Link>

          <Link to={"/contact"}>
            <img
              className="image navbar__contact__icon"
              src="../../../public/images/contact.svg"
              alt="contact"
            />
          </Link>

          <NavLink to={"/login"} className="loginBtn link">
            ورود / ثبت نام
          </NavLink>
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
          <NavLink
            to={"/categories"}
            className={(link) =>
              link.isActive ? "sideBarRoute link sideBarRouteActive" : "link"
            }
          >
            <li className="sidebar__menu__item">
              <div className="aaa"></div>
              <img
                className="ssidebar__menu__item"
                src="../../../public/images/category.svg"
              />
              دسته بندی ها
            </li>
          </NavLink>
          <NavLink
            to={"/basket"}
            className={(link) =>
              link.isActive ? "sideBarRoute link sideBarRouteActive" : "link"
            }
          >
            <li className="sidebar__menu__item">
              <div className="aaa"></div>
              <img src="../../../public/images/basket.svg" alt="basket" />
              سبد خرید
            </li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={(link) =>
              link.isActive ? "sideBarRoute link sideBarRouteActive" : "link"
            }
          >
            <li className="sidebar__menu__item">
              <div className="aaa"></div>
              <img src="../../../public/images/contact.svg" alt="basket" />
              تماس با ما
            </li>
          </NavLink>
        </ul>

        <div className="companyPhoneNumber">
          <div>
            +012 793 5729
            <br />
            <br />
            +98 933 453 3223
          </div>
          <img src="../../../public/images/logo.png" alt="" />
        </div>
      </div>
    </>
  );
}
