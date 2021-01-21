import React from 'react'

export default function Header() {
    return (
<header>
		<div className="container">
		    <div className="row">
			<div className="social-links activalo">
					<a href="">
					<i className="fal fa-user user-icon" aria-hidden="true"></i>
					</a>
				</div>
			<div className="brand">
			    <a href="">
			       <img className="logos" title="Logo" src="./imgs/logo.png" />
			       <img className="logo" src="./imgs/logo-negro.png"/>
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
				<li><a href="#home" className="active">Inicio</a></li>
				<li><a href="#about">Sobre Mí</a></li>
				<li><a href="#services">Habilidades</a></li>
				<li><a href="#portfolio">Proyectos</a></li>
				<li><a href="#contact">Contacto</a></li>

				<div className="search-active">
						<input className="search-text" type="text" name="" placeholder="Buscar..." />
						<a className="search-btn"><i className="far fa-search" aria-hidden="true"></i></a>
					</div>
			    </ul>
			</div>
				<div className="box-caja">
					<div className="search-box">
					<input className="search-text" type="text" name="" placeholder="Buscar..."/>
					<a className="search-btn"><i className="far fa-search" aria-hidden="true"></i></a>
				</div>
				<div className="social-links">
						<a href="">
						<i className="fal fa-user user-icon" aria-hidden="true"></i>
						</a>
					</div>
				</div>
		    </div>
		</div>
    	</header>
    )
}
