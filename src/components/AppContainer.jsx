import { useState } from "react";
import TaskForm from "./TaskForm";
import AppHeader from "./AppHeader";
import useTodos from "@/hooks/useTodos";
import TasksList from "./TasksList";
import TodoFilters from "./TodoFilters";
import Footer from "./Footer";
import useTheme from "@/hooks/useTheme";

const AppContainer = () => {
  const {
    addTask,
    todos,
    deleteTask,
    updateTask,
    searchValue,
    setSearchValue,
    filteredTodos,
    filters,
    setFilters,
  } = useTodos();

  const { theme, setTheme } = useTheme();

  const [showAddTask, setShowAddTask] = useState(false);

  const handleShowClick = () => {
    setShowAddTask((prev) => !prev);
  };

  const completedTasks = todos.filter(
    (task) => task.status === "completed",
  ).length;

  return (
    <div className="container mx-auto px-6 py-8 md:max-w-[1000px]">
      <AppHeader
        handleShowClick={handleShowClick}
        completedTasks={completedTasks}
        totalTasks={todos.length}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        theme={theme}
        setTheme={setTheme}
      />
      <TodoFilters filters={filters} setFilters={setFilters} />
      {showAddTask && (
        <TaskForm
          initialValue={{}}
          onSubmit={addTask}
          onCancel={() => setShowAddTask(false)}
          formTitle="Add New Task"
          submitLabel="Add Task"
        />
      )}
      {filteredTodos.length === 0 && todos.length > 0 ? (
        <div className="text-muted-foreground py-9 text-center text-xl">
          No tasks match your current filters
        </div>
      ) : (
        <TasksList
          todos={filteredTodos}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default AppContainer;
