import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'

function CardItems(props) {
	return(
		<>
			<li className="cards__item">
				<div className='cards__item__link'>
					<figure className='cards__item__pic-wrap' data-category={props.label}>
						<img  
						src={props.src}
						alt='Project 1' 
						className='cards__item__img'
						/>
					</figure>
					<div className="cards__item__info">
						<h1 className="cards__item__header">{props.header}</h1>
						<h5 className="cards__item__text">{props.text}</h5>
							<div className="project__buttons">
								<Button 
								className='btns' 
								buttonStyle='btn--primary' 
								buttonSize='btn--medium'
								path={props.projectbuttonlink1}
								target={props.target}
								>
								{props.projectbutton1}
								</Button>
								<Button 
								className='btns' 
								buttonStyle='btn--primary' 
								buttonSize='btn--medium'
								path={props.projectbuttonlink2}
								target={props.target}
								>
								{props.projectbutton2}
								</Button>
							</div>
					</div>
				</div>
			</li>
		</>
	)
}

export default CardItems