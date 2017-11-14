//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './global/Header';
import Post from './global/Post';

//Assets
import './App.css';
import posts from "../data/datos";

class App extends React.Component{
	render(){
		return(
			<div>
				<Header titulo="Adopta tu mascota"/>
				<div id="container">
					<Post posts={posts}/>
				</div>
			</div>
		);
	}
}

export default App;