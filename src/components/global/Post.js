import React from 'react';
import PropTypes from 'prop-types';

import './css/Post.css';

class Post extends React.Component{

	constructor(){
		super();

		this.state={
			loveit:0
		}

		this.handleLoveItClick = this.handleLoveItClick.bind(this);
	}

	static propTypes = {
		posts: PropTypes.array.isRequired
	};

	handleLoveItClick(e){
		this.setState({
			loveit: this.state.loveit +1
		});
	}

	render(){
		const {posts} = this.props;
		return(
			<div id="post">
				<ul className="posts">
					{posts && posts.map(
						(post,key) => 
						<li key={key}>
							<div className="post-container">
								<div className="img-container">
									<img className="img-controller ajuste" src={post.img}/>
								</div>
								<div className="info">
									<div className="ajuste">
										<div className="buttons-container ajuste tamanio marco">
											<button>Seguir</button>
											<button onClick={this.handleLoveItClick}>Me encanta</button>
											<button>Compartir</button>
										</div>
									</div>
									<div className="ajuste">
										<div className="tamanio marco">
										Reacciones: {this.state.loveit}
										</div>
									</div>
									<div>
										<div className="ajuste">
											<div className="usuario-container tamanio">{post.usuario}</div>
										</div>
										<div className="ajuste">
											<div className="tamanio">{post.post}</div>
										</div>
										<div className="ajuste">
											<div className="tamanio">Comentarios</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					)}
					
				</ul>
			</div>
		);
	}

}

export default Post;