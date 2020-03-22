import React, { useEffect } from  'react';
import './Main.css';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';



export default function Main({ Match }) {
    return(
			<div className="main-container">
				<img src={logo} alt="Tindev"/>
				<ul>
					<li>
						<img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
						<footer>
							<strong>Diego Fernandes</strong>
							<p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
						</footer>
						<div className="buttons">
							<button type="submit">
								<img src={dislike} alt="dislike"/>
							</button>
							<button type="submit">
								<img src={like} alt="like"/>
							</button>
						</div>
					</li>
					<li>
						<img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
						<footer>
							<strong>Diego Fernandes</strong>
							<p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
						</footer>
						<div className="buttons">
							<button type="submit">
								<img src={dislike} alt="dislike"/>
							</button>
							<button type="submit">
								<img src={like} alt="like"/>
							</button>
						</div>
					</li>
					<li>
						<img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
						<footer>
							<strong>Diego Fernandes</strong>
							<p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
						</footer>
						<div className="buttons">
							<button type="submit">
								<img src={dislike} alt="dislike"/>
							</button>
							<button type="submit">
								<img src={like} alt="like"/>
							</button>
						</div>
					</li>
					<li>
						<img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
						<footer>
							<strong>Diego Fernandes</strong>
							<p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
						</footer>
						<div className="buttons">
							<button type="submit">
								<img src={dislike} alt="dislike"/>
							</button>
							<button type="submit">
								<img src={like} alt="like"/>
							</button>
						</div>
					</li>
				</ul>
			</div>
    );
}