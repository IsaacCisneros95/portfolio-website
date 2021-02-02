import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import img9 from './images/img9.jpg';
import MaynoothThumbnail from './images/MaynoothThumbnail.jpg';
import MaynoothMobileThumbnail from './images/MaynoothMobileThumbnail.jpg';
import RoarBikesThumbnail from './images/RoarBikesThumbnail.jpg';
import RobofriendsThumbnail from './images/RobofriendsThumbnail.jpg';
import todolist from './images/todolist.jpg';

function Cards() {
	return(
		<div className="cards">
			<h1>Projects</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
						src={RobofriendsThumbnail} 
						header="Robofriends"
						text="This is a one page, simple react app." 
						label='React' 
						projectbutton1='Code'
						projectbuttonlink1={{ pathname:"https://github.com/IsaacCisneros95/robofriends" }}
						projectbutton2='Live App'
						projectbuttonlink2={{ pathname:"https://isaaccisneros95.github.io/robofriends/" }}
						target='_blank'
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
						src={todolist} 
						header="To-do list"
						text="This is a basic to-do list I did while on my WebDev ZTM Course" 
						label='Javascript' 
						projectbutton1='Code'
						projectbuttonlink1={{ pathname:"https://xd.adobe.com/view/7383e6b4-6f69-416b-9c62-9e9250e87106-26d0/" }}
						projectbutton2='Live App'
						projectbuttonlink2={{ pathname:"https://isaaccisneros95.github.io/todolist/" }}
						target='_blank'
						/>
					</ul>
					<ul className="cards__items">
					<CardItem
					src={MaynoothThumbnail} 
					header="Maynooth Furniture"
					text="This is a high fidelity wireframe which I did in my Adobe XD Course" 
					label='Adobe XD' 
					projectbutton1='Adobe Link'
					projectbuttonlink1={{ pathname:"https://xd.adobe.com/view/7383e6b4-6f69-416b-9c62-9e9250e87106-26d0/" }}
					projectbutton2='Video Demo'
					projectbuttonlink2={{pathname: "https://www.youtube.com/watch?v=-qBm_fmHrXc"}}
					target='_blank'
					/>
					<CardItem
					src={MaynoothMobileThumbnail} 
					header="Maynooth Furniture Mobile"
					text="This is a high fidelity wireframe which I did in my Adobe XD Course" 
					label='Adobe XD' 
					projectbutton1='Adobe Link'
					projectbuttonlink1={{ pathname:"https://xd.adobe.com/view/3f59e789-779d-4601-bf31-915f829910d6-6a0a/" }}
					projectbutton2='Video Demo'
					projectbuttonlink2={{pathname: "https://youtu.be/fflcwT4IGvM"}}
					target='_blank'
					/>
					<CardItem
					src={RoarBikesThumbnail} 
					header="Roar Bikes"
					text="This is a high fidelity wireframe which I did in my Adobe XD Course" 
					label='Adobe XD' 
					projectbutton1='Adobe Link'
					projectbuttonlink1={{ pathname:"https://xd.adobe.com/view/bd0fb675-20e3-43c8-9a01-ec1b97033ad2-e85c/" }}
					projectbutton2='Video Demo'
					projectbuttonlink2={{ pathname:"https://www.youtube.com/watch?v=VYxlk_VT3C0" }}
					target='_blank'
					/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards