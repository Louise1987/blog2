import React from 'react';
import '../App.css';
import lotusflower from '../image/lotusflower.jpg';
// import { useHistory } from 'react-router-dom';

// // LÄNK TILL BLOGGSIDA
const Home = () => {	
	// const history = useHistory();
	// const handleClick = () => {
	// 	history.push('/Blogpage');
	// }

	return (
			<main className="blog-page">
				<section className="blog-block">
						<section id="link">
							<section className="blog-link">
								<section id="left-column">
									<span className="blog-date">datum</span>
									<span className="blog-cat">kategori</span>
								</section>
								<h1 id="blog-text">
									Lorem ipsum dolor sit amet
								</h1>
									<img id="blog-image" src={lotusflower} width={300} height={170} alt="flower" />		
							</section>
						</section>			
				</section>		
			</main>
	);
};


export default Home; 