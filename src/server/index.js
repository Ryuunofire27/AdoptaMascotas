//Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

//Webpack configuration
import webpackConfig from '../../webpack.config.dev';

//Server Port
const port = 8080;

//Express app
const app = express();

//Webpack compiler
const webpackCompiler = webpack(webpackConfig);

//Webpack Middlewares

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

//Sending all trafic to react
//*: significa todo el trafico
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, err=>{
	if(!err){
		open('http://localhost:${port}');
	}
});