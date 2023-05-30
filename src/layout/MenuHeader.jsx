import "../assets/less/header.less";
import { signOut } from "firebase/auth";
import { routes } from "@Router/router";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { iconClose, iconHamburger } from "@Assets/icons";
import { Link } from 'react-router-dom';

export default function MenuHeader() {
  const account = '';

  return (

    <>

      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      <header className="headers">
        {/* Header */}
        <nav className="nav">
          <Link className="logo" to={''} >
            <img src="https://hoanghamobile.com/Content/web/img/logo-text.png" alt="" className="logo" />
          </Link>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">Bảo Hành</a>
              <a href="#" className="nav_link">Tra Cứu Đơn Hàng</a>

            </li>
          </ul>
          {account === '' ? ( // Kiểm tra giá trị của account
            <Link className="signin-signup" to={'/sign-in'} >
              <button className="button-login" id='form-open'>Đăng Nhập</button>
            </Link>
          ) : (
            <div className="success_sign">
              <div className="image_account">
                <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" className="img-acc" />
              </div>
              <div className="name_account">{account}</div>
            </div>

          )}

        </nav>
      </header>

    </>
  )
}