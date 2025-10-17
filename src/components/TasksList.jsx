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
      Nothing here yet! Let’s add your first task and make progress happen.
    </div>
  );
};

export default TasksList;
