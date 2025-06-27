import TaskItem from "./TaskItem";

const TasksList = ({ todos, deleteTask, updateTask }) => {
  return todos.length > 0 ? (
    <div className="space-y-3">
      {todos.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  ) : (
    <div className="text-muted-foreground py-9 text-center text-xl">
      No tasks yet. Start by adding your first task!
    </div>
  );
};

export default TasksList;
