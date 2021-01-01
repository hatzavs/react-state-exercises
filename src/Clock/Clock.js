import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

 
class Clock extends Component {
	constructor() {
		super();
		this.state = {
			time: new Date().toLocaleTimeString()
		};
	}

	clockUpdate() {
		setInterval(() => {
			this.setState({
				time : new Date().toLocaleTimeString()
			});
		}, 1000);
		
	}

	render() {
		this.clockUpdate();
		return (
			<div>
				<h1>Clock</h1>
				The time is: {this.state.time}				
			</div>
		);
	}
}

export default Clock;