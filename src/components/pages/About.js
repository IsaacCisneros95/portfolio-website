import React from 'react';
import '../../App.css';
import aboutimage from "../images/aboutimage.jpg"

export default function About() {
	return(
		<div className='about'>
		<div className="aboutwrapper">
			<div className="abouttext">
			<h1>About me</h1>
			<h3 className="aboutintro">
			My name is Isaac Cisneros, I am 25 years old and currently live in Tijuana, Baja California, Mexico.
			I am a B.S. in Mechanical Engineer graduate from UABC. After gaining some experience in Tijuana's manufacturing industry, I decided to transition into Web Development as it has been in my best interests for a long time.
			I took on the challenge of learning web development with the help of online courses and close friends. I have enjoyed this transition very much since I started.
			I am currently focusing on HTML, CSS, JavaScript and React, as I think it is a very powerful and flexible framework, however I am excited to see what new languages and frameworks I could learn from a career in the IT Industry. 
			</h3>
			</div>
			<img className="aboutimage" src={aboutimage} alt="aboutimage"/>
			</div>
		</div>
		)
		
}