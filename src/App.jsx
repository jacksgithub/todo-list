/**
 * Todo App w/ local storage
 *
 * Icons: https://github.com/react-icons/react-icons?tab=readme-ov-file#readme
 */
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		);
	}
}
