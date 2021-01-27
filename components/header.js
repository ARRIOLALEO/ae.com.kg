import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="brand">
            <a href="">
              <img className="logos" alt="main logo " title="Logo" src="./imgs/logo.png" />
              <img className="logo" src="./imgs/logo-negro.png" alt="logo mobile versionb"/>
            </a>
          </div>
          <div className="ham-burger">
            <a href="#menu" className="header__menu hide-desktop">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#home" className="active">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#services">Услуги</a>
              </li>
              <li>
                <a href="#portfolio">вопросы - ответы</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>

              <div className="search-active">
                <input
                  className="search-text"
                  type="text"
                  name=""
                  placeholder="Buscar..."
                />
                <a className="search-btn">
                  <i className="far fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </ul>
          </div>
          <div className="box-caja">
            <div className="search-box">
              <input
                className="search-text"
                type="text"
                name=""
                placeholder="Buscar..."
              />
              <a className="search-btn">
                <i className="far fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
