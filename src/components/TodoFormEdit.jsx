import { useState } from 'react';

import React from 'react';

export default function TodoFormEdit({ task: prevTask, handleEdit }) {
	const [task, setTask] = useState(prevTask);

	function handleInputChange(e) {
		setTask(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		handleEdit(task);
		setTask('');
	}

	return (
		<form className="TodoFormEdit" onSubmit={handleSubmit}>
			<input
				type="text"
				name="task"
				id="task"
				value={task}
				onChange={handleInputChange}
			/>
		</form>
	);
}
