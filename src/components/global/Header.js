//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//Assets
import './css/Header.css';
import notif from './img/logo.svg';
import logo from './img/java.png';

class Header extends React.Component{
	
	static propTypes = {
		titulo: PropTypes.string.isRequired
	}

	constructor(){
		super();

		this.state={
			informacion: ""
		}

		this.handleNotifMessageClick = this.handleNotifMessageClick.bind(this);
		this.handleWindowMessageClick = this.handleWindowMessageClick.bind(this);
		this.handleInfoChange = this.handleInfoChange.bind(this);
		this.handleBtnNotifMessageClic = this.handleBtnNotifMessageClic.bind(this);
	}

	handleNotifMessageClick(e){
		var notifMgn = document.getElementById("notif-mgn");
		notifMgn.style.display = informacion.style.display = (informacion.style.display == 'none') ? 'block' : 'none';
	}

	handleBtnNotifMessageClic(e){
		var informacion = document.getElementById("informacion");
		if(e.target.className==="btn-notif"){
			this.setState({
				informacion: "notificaciones de las personas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tempora corrupti ad molestias saepe, harum sed odio accusantium doloremque fugit alias commodi sint nulla facilis recusandae quisquam odit. Cupiditate, blanditiis."
			});
		}else{
			this.setState({
				informacion: "mensajes de las personas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempore similique ratione quaerat totam tenetur voluptatibus, labore at quos nisi veritatis, quasi vitae, soluta ea minima amet delectus repudiandae suscipit!"
			});
		}
		if(this.state.informacion===""){
			informacion.style.display = (informacion.style.display == 'none') ? 'block' : 'none';
		}

	}

	handleWindowMessageClick(e){
		console.log(window.screenY);
		console.log(window.pageYOffset);
		var titulo = document.getElementById("titulo");
		//titulo.className='titulo';
	}

	handleInfoChange(e){
		this.setState({
				informacion: "mensajes de las personas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempore similique ratione quaerat totam tenetur voluptatibus, labore at quos nisi veritatis, quasi vitae, soluta ea minima amet delectus repudiandae suscipit!"
		});
	}



	render(){
		const titulo = this.props.titulo;
		var prueba = "#";
		return(
			<header>
				<div id="header">
					<h1 id="titulo" >{titulo}</h1>
					<div id="nav">
						<div id="contenedor-img">
							<a href="#" onClick={this.handleWindowMessageClick}><img id="logo" src={logo}/></a>
							<a href="#"><img id="perfil" src={logo}/></a>
						</div>
						<div id="contenedor-input">
							<input type="text" id="buscar" placeholder="Buscar"/>
						</div>
						<div id="contenedor-notif">
							<button id="notifMessage" onClick={this.handleNotifMessageClick}><img id="animacion" src={notif}/></button>
							<div id="notif-mgn">
								<button className="btn-notif" onClick={this.handleBtnNotifMessageClic}>Notificaciones</button>
								||
								<button className="btn-mng" onClick={this.handleBtnNotifMessageClic}>Mensajes</button>
								<div id="informacion" onChange={this.handleInfoChange}>
									{this.state.informacion}
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;