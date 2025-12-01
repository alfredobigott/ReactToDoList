import { useState } from "react";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
  editingId,
  setEditingId,
}) {
  const [newText, setNewText] = useState("");

  return (
    <div>
      <h2>Task List</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>

            {/* Toggle completed */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            {/* If this task is being edited */}
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />

                <button
                  onClick={() => {
                    editTask(task.id, newText);
                    setEditingId(null);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {/* Normal display (not editing) */}
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    marginLeft: "8px",
                  }}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setNewText(task.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}

            {/* Delete button */}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
