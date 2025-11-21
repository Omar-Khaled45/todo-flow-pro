import { useEffect, useMemo, useState } from "react";

const useTodos = () => {
  // States
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    return storedTodos || [];
  });
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    status: "all",
    dueDate: "all",
    priority: "all",
  });

  const addTask = (todoData) => {
    const newTask = {
      ...todoData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTodos((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    );
  };

  const filteredTodos = useMemo(() => {
    let filtered = [...todos];

    filtered = todos.filter(
      (task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (filters.status !== "all") {
      filtered = filtered.filter((task) => task.status === filters.status);
    }

    if (filters.priority !== "all") {
      filtered = filtered.filter((task) => task.priority === filters.priority);
    }

    if (filters.dueDate !== "all") {
      const today = new Date();
      const todayStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );
      const weekFromNow = new Date(
        todayStart.getTime() + 7 * 24 * 60 * 60 * 1000,
      );

      filtered = filtered.filter((task) => {
        if (!task.dueDate) return;

        const dueDate = new Date(task.dueDate);

        switch (filters.dueDate) {
          case "today":
            return (
              dueDate >= todayStart &&
              dueDate < new Date(todayStart.getTime() + 24 * 60 * 60 * 1000)
            );
          case "week":
            return dueDate >= todayStart && dueDate <= weekFromNow;
          case "overdue":
            return dueDate < todayStart;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [todos, searchValue, filters]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    addTask,
    todos,
    deleteTask,
    updateTask,
    searchValue,
    setSearchValue,
    filteredTodos,
    filters,
    setFilters,
  };
};

export default useTodos;
