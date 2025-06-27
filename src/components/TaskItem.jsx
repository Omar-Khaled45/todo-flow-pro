import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-gray-100 text-gray-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isOverDue = task.createdAt > task.dueDate;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <TaskForm
          initialValue={task}
          onSubmit={(updatedTask) => {
            updateTask(task.id, updatedTask);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
          formTitle="Edit Task"
          submitLabel="Save Changes"
        />
      ) : (
        <Card
          className={`p-4 transition-all duration-200 hover:shadow-md ${task.status === "completed" && "opacity-70"}`}
        >
          <div className="flex gap-3">
            <div>
              <Checkbox
                className="cursor-pointer border-black"
                onCheckedChange={(checked) =>
                  updateTask(task.id, {
                    status: checked ? "completed" : "pending",
                  })
                }
                checked={task.status === "completed"}
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex justify-between">
                <p
                  className={`text-lg font-semibold ${task.status === "completed" && "text-muted-foreground line-through"}`}
                >
                  {task.title}
                </p>
                <div className="space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 cursor-pointer p-0"
                    onClick={() => setIsEditing((prev) => !prev)}
                    disabled={task.status === "completed"}
                  >
                    <Pencil />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive h-8 w-8 cursor-pointer p-0"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
              <p
                className={`text-muted-foreground ${task.status === "completed" && "line-through"}`}
              >
                {task.description}
              </p>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 capitalize">
                  <span
                    className={`block h-3 w-3 rounded-full ${getPriorityColor(task.priority)}`}
                  ></span>
                  {task.priority}
                </div>
                <Badge
                  variant="secondary"
                  className={getStatusColor(task.status) + " " + "capitalize"}
                >
                  {task.status.replace("-", " ")}
                </Badge>
                {task.dueDate && (
                  <div
                    className={`flex items-center gap-2 text-sm ${isOverDue ? "text-red-600" : "text-muted-foreground"}`}
                  >
                    {isOverDue ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      <Calendar className="h-4 w-4" />
                    )}
                    {new Date(task.dueDate).toLocaleDateString()}
                    {isOverDue && (
                      <span className="font-semibold">Overdue</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default TaskItem;
