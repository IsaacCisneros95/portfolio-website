import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
	return(
		<div className='hero-container'>
			<h1>Isaac Cisneros</h1>
			<p>Self-taught entry-level Web Developer</p>
			<div className='hero-btns'>
					<Button 
					className='btns' 
					buttonStyle='btn--outline' 
					buttonSize='btn--large'
					path='/contact'> 
						CONTACT ME
					</Button>
			</div>
		</div>
	)
}

export default HeroSection;