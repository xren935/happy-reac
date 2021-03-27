import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard';
import CardList from './CardList';
import Form from './Form';
import React, { Component } from 'react';
import './index.css';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;
