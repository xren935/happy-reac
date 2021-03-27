import MyCard from './MyCard';
import React, { Component } from 'react';
import './index.css';

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <MyCard key={profile.id} {...profile}/>)}
	</div>
);

export default CardList; 