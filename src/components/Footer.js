import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css'

export default function Footer() {
	return (
		<div className="footer-container">
			<section className='footer-subscription'>
        		<div className='input-areas'>
            			<Button 
            			buttonStyle='btn--outline'
            			path='/contact'
            			>
            			CONTACT ME!</Button>
				<p className='footer-subscription-heading'>
         			Follow me on Linked-In and GitHub!
        	 	</p>
        		</div>
      		</section>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="social-icons">
						<Link 
						className="social-icon-link linkedin"
						to={{pathname:"https://www.linkedin.com/in/isaaccisneros95/"}}
						target='_blank'
						aria-label='Linkedin'
						>
							<i className="fab fa-linkedin-in"></i>
						</Link>
						<Link 
						className="social-icon-link github"
						to={{pathname:"https://github.com/IsaacCisneros95"}}
						target='_blank'
						aria-label='Github'
						>
							<i className="fab fa-github"></i>
						</Link>
					</div>
					<div className="footer-logo">
							<h3>Made with React</h3> 
							<img alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width="60" height="40"/>
					</div>
				</div>
			</section>
		</div>
	)
}