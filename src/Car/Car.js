import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {
	constructor() {
		super();
		this.state = {
			carColor: "silver"
		};
	}

	chooseColor(e) {
		this.setState({
			carColor: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Choose a color for your car:</h1>
				<select onChange={this.chooseColor.bind(this)}>
					<option value="silver">silver</option>
					<option value="red">red</option>
					<option value="blue">blue</option>
					<option value="yellow">yellow</option>
					<option value="green">green</option>
				</select>
				<br />
				<br />
				<div style={{background:this.state.carColor}} className="Car-color">Color example</div>
			</div>
		);
	}
}

export default Car;