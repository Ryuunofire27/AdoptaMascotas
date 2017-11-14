//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';

const AppRoutes = () =>
	<App>
		<Route component={App} /> 
	</App>

export default AppRoutes;