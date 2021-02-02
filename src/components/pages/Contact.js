import React from 'react';
import '../../App.css';

export default function Contact() {
	return(
		<div className="contact">
			<div className="contactheader">
				<h1>Contact Information</h1>
				<h3>I am currently open for internships, full time positions and freelancing work related to Web Development in Tijuana, Baja California or remotely.</h3>
			</div>
			<div className="contactinfo">
			<h4 className="contactitem">Linked-In:
			<a href='https://www.linkedin.com/in/isaaccisneros95/' className="contactlink">https://www.linkedin.com/in/isaaccisneros95<i className=" contactlogo fab fa-linkedin-in"/></a>
			</h4>
			<h4 className="contactitem">GitHub:
			<a href='https://github.com/IsaacCisneros95' className="contactlink">https://github.com/IsaacCisneros95<i className="contactlogo fab fa-github"/></a>
			</h4>
			</div>
		</div>
		) 
}