import React, { Component } from 'react';
import TodoFormEdit from './TodoFormEdit';
import { BsTrash } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false };
		this.handleRemove = this.handleRemove.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleRemove() {
		this.props.removeTodo(this.props.id);
	}
	handleToggle() {
		this.props.handleToggle(this.props.id);
	}
	toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleEdit(task) {
		this.setState({ isEditing: false });
		this.props.editTodo(this.props.id, task);
	}

	render() {
		return (
			<div className={`Todo${this.props.done ? ' done' : ''}`}>
				{this.state.isEditing ? (
					<TodoFormEdit handleEdit={this.handleEdit} task={this.props.task} />
				) : (
					<>
						<span className="task-text" onClick={this.handleToggle}>
							{this.props.task}
						</span>
						<span className="edit" onClick={this.toggleEdit}>
							<BsPencil />
						</span>
						<span className="x" onClick={this.handleRemove}>
							<BsTrash />
						</span>
					</>
				)}
			</div>
		);
	}
}
