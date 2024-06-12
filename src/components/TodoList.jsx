import React, { Component } from 'react';
import Todo from './Todo';
import TodoFormAdd from './TodoFormAdd';
import '../styles/TodoList.css';

export default class TodoList extends Component {
	// static defaultProps = {
	// 	todos: [
	// 		{ id: 1, task: 'Create todo list', done: false },
	// 		{ id: 2, task: 'Create word app', done: false },
	// 		{ id: 3, task: 'Shower', done: false },
	// 	],
	// };
	constructor(props) {
		super(props);
		this.state = {
			todos: JSON.parse(localStorage.getItem('todoList') || '[]'),
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.toggleDone = this.toggleDone.bind(this);
		this.storeTodos = this.storeTodos.bind(this);
	}
	addTodo(task) {
		const newTodo = { id: Date.now(), task, done: false };
		this.setState({ todos: [...this.state.todos, newTodo] }, () => {
			this.storeTodos();
		});
	}
	removeTodo(id) {
		const newTodos = this.state.todos.filter((todo) => todo.id != id);
		this.setState({ todos: newTodos }, () => {
			this.storeTodos();
		});
	}
	toggleDone(id) {
		const updatedTodos = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, done: !todo.done } : todo
		);
		this.setState({ todos: updatedTodos }, () => {
			this.storeTodos();
		});
	}
	editTodo(id, task) {
		const updatedTodos = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, task } : todo
		);
		this.setState({ todos: updatedTodos }, () => {
			this.storeTodos();
		});
	}
	storeTodos() {
		localStorage.setItem('todoList', JSON.stringify(this.state.todos));
	}

	render() {
		return (
			<div className="TodoList">
				<h1>Todo List</h1>
				<TodoFormAdd addTodo={this.addTodo} />

				{this.state.todos.map((todo) => (
					<Todo
						key={todo.id}
						{...todo}
						removeTodo={this.removeTodo}
						handleToggle={this.toggleDone}
						editTodo={this.editTodo}
					/>
				))}
			</div>
		);
	}
}
