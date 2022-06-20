import React, { useState } from "react";
import "./SideNav.css";
// import DateIcon from "../Images/dateicon.svg";
// import CommonIcon from "../Images/commonicon.svg";
import { Link, useNavigate } from "react-router-dom";

function SideNav() {
  let navigate = useNavigate();
  let path = window.location.pathname;
  const handleClick = (e) => {
    // navigate('/', { state: { day: e } })
    console.log(e.target.innerText);
  };
  return (
    <div className="sidenav">
      <div className="upper">
        <ul className="container">
          <Link to="/">
            <li
              className={path === "/" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/" ? "dateIconActive" : "dateIcon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#1D4ED8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 5.00312C4.53976 5.00312 4.16667 5.37622 4.16667 5.83646V15.8365C4.16667 16.2967 4.53976 16.6698 5 16.6698H15C15.4602 16.6698 15.8333 16.2967 15.8333 15.8365V5.83646C15.8333 5.37622 15.4602 5.00312 15 5.00312H5ZM2.5 5.83646C2.5 4.45574 3.61929 3.33646 5 3.33646H15C16.3807 3.33646 17.5 4.45574 17.5 5.83646V15.8365C17.5 17.2172 16.3807 18.3365 15 18.3365H5C3.61929 18.3365 2.5 17.2172 2.5 15.8365V5.83646Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.3333 1.66666C13.7936 1.66666 14.1667 2.03975 14.1667 2.49999V5.83332C14.1667 6.29356 13.7936 6.66666 13.3333 6.66666C12.8731 6.66666 12.5 6.29356 12.5 5.83332V2.49999C12.5 2.03975 12.8731 1.66666 13.3333 1.66666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66665 1.66666C7.12688 1.66666 7.49998 2.03975 7.49998 2.49999V5.83332C7.49998 6.29356 7.12688 6.66666 6.66665 6.66666C6.20641 6.66666 5.83331 6.29356 5.83331 5.83332V2.49999C5.83331 2.03975 6.20641 1.66666 6.66665 1.66666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 9.16979C2.5 8.70955 2.8731 8.33646 3.33333 8.33646H16.6667C17.1269 8.33646 17.5 8.70955 17.5 9.16979C17.5 9.63003 17.1269 10.0031 16.6667 10.0031H3.33333C2.8731 10.0031 2.5 9.63003 2.5 9.16979Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83331 12.5C5.83331 12.0398 6.20641 11.6667 6.66665 11.6667H8.33331C8.79355 11.6667 9.16665 12.0398 9.16665 12.5V14.1667C9.16665 14.6269 8.79355 15 8.33331 15H6.66665C6.20641 15 5.83331 14.6269 5.83331 14.1667V12.5Z"
                    />
                  </svg>
                  <p className={path === "/" ? "linktextactive" : "linktext"}>Today</p>
                </div>
                <div className={path === "/" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
          <Link to="/tomorrow">
            <li
              className={path === "/tomorrow" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/tomorrow" ? "iconActive" : "icon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                    />
                  </svg>
                  <p className={path === "/tomorrow" ? "linktextactive" : "linktext"}>Tomorrow</p>
                </div>
                <div className={path === "/tomorrow" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
          <Link to="/overdue">
            <li
              className={path === "/overdue" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/overdue" ? "iconActive" : "icon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                    />
                  </svg>
                  <p className={path === "/overdue" ? "linktextactive" : "linktext"}>Overdue</p>
                </div>
                <div className={path === "/overdue" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <hr width="70%" ></hr>
      <div className="lower">
        <ul className="container">
          <Link to="/personal">
            <li
              className={path === "/personal" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/personal" ? "iconActive" : "icon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                    />
                  </svg>
                  <p className={path === "/personal" ? "linktextactive" : "linktext"}>Personal</p>
                </div>
                <div className={path === "/personal" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
          <Link to="/home">
            <li
              className={path === "/home" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/home" ? "iconActive" : "icon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                    />
                  </svg>
                  <p className={path === "/home" ? "linktextactive" : "linktext"}>Home</p>
                </div>
                <div className={path === "/home" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
          <Link to="/office">
            <li
              className={path === "/office" ? "activeBox" : "box"}
              onClick={handleClick}
            >
              <div className="item">
                <div className="leftday">
                  <svg
                    className={path === "/office" ? "iconActive" : "icon"}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#374151"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                    />
                  </svg>
                  <p className={path === "/office" ? "linktextactive" : "linktext"}>Office</p>
                </div>
                <div className={path === "/office" ? "countactive" : "count"}>3/7</div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
