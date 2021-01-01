import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			restaurant: '',
			meal: '',
			desert: false
		};
	}

	nameType(e) {
		this.setState({
			name: e.target.value
		});
	}

	restPick(e) {
		this.setState({
			restaurant: e.target.value
		});
	}

	mealType(e) {
		this.setState({
			meal: e.target.value
		});
	}

	desertCheck(e) {
		this.setState({
			desert: e.target.checked
		});
	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" value={this.state.name} onChange={this.nameType.bind(this)}/>
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.restPick.bind(this)}>
						<option value="">Choose...</option>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" value={this.state.meal} onChange={this.mealType.bind(this)}/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" onChange={this.desertCheck.bind(this)}/>
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name ? this.state.name : "[NAME]"}!
					<br />
					{this.state.restaurant ? 
					"We are glad you want to reserve a table at " + this.state.restaurant
					: "Please choose a retaurant"}.
					<br />
					{this.state.meal ? 
					"We will make sure that your favorite meal, " + this.state.meal + " is available." 
					: ''}
					<br />

					{this.state.desert ? "Additionally, our chef will make a special desert for you!" : ''}<br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;