import { useState } from 'react';
import TodoFormEdit from './TodoFormEdit';
import { BsTrash } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';

export default function Todo({
	id,
	task,
	done,
	removeTodo,
	editTodo,
	toggleDone,
}) {
	const [isEditing, setIsEditing] = useState(false);

	function handleRemove() {
		removeTodo(id);
	}
	function handleToggle() {
		toggleDone(id);
	}
	function toggleEdit() {
		setIsEditing(!isEditing);
	}
	function handleEdit(updatedTask) {
		setIsEditing(false);
		editTodo(id, updatedTask);
	}

	return (
		<div className={`Todo${done ? ' done' : ''}`}>
			{isEditing ? (
				<TodoFormEdit handleEdit={handleEdit} task={task} />
			) : (
				<>
					<span className="task-text" onClick={handleToggle}>
						{task}
					</span>
					<span className="edit" onClick={toggleEdit}>
						<BsPencil />
					</span>
					<span className="x" onClick={handleRemove}>
						<BsTrash />
					</span>
				</>
			)}
		</div>
	);
}
