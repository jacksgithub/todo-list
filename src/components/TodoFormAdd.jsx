import { useState } from 'react';

export default function ToDoFormAdd({ addTodo }) {
	const [task, setTask] = useState('');

	function handleInputChange(e) {
		setTask(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		addTodo(task);
		setTask('');
	}

	return (
		<form className="TodoFormAdd" onSubmit={handleSubmit}>
			<input
				type="text"
				name="task"
				id="task"
				placeholder="Enter Task"
				value={task}
				onChange={handleInputChange}
			/>
			<button>Add Task</button>
		</form>
	);
}
