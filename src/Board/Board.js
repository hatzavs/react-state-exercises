import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {

	chooseBox(e) {
		if (e.target.className === "boards") {
			Array.from(e.target.children).forEach((board) => {
				board.style.border = "3px solid #6495ee";
			});
			return;
		}
		const boards = Array.from(e.target.parentNode.children);
		boards.forEach((board) => {
			board.style.border = "3px solid #6495ee";
		});
		e.target.style.border = "3px solid red";
	}

	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards" onClick={this.chooseBox}>
					<div className="Board-option" onClick={this.chooseBox}>1</div>
					<div className="Board-option" onClick={this.chooseBox}>2</div>
					<div className="Board-option" onClick={this.chooseBox}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;