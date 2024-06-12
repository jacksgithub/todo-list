import React, { Component } from 'react';

export default class TodoFormEdit extends Component {
	constructor(props) {
		super(props);
		this.state = { task: this.props.task };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleEdit(this.state.task);
		this.setState({ task: '' });
	}

	render() {
		return (
			<form className="TodoFormEdit" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="task"
					id="task"
					value={this.state.task}
					onChange={this.handleInputChange}
				/>
				{/* <button>Add Task</button> */}
			</form>
		);
	}
}
