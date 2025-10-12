import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TaskForm = ({
  initialValue,
  onSubmit,
  onCancel,
  formTitle,
  submitLabel,
}) => {
  const [title, setTitle] = useState(initialValue.title || "");
  const [description, setDescription] = useState(
    initialValue.description || "",
  );
  const [priority, setPriority] = useState(initialValue.priority || "medium");
  const [status, setStatus] = useState(initialValue.status || "pending");
  const [dueDate, setDueDate] = useState(
    initialValue.dueDate
      ? new Date(initialValue.dueDate).toISOString().slice(0, 10)
      : "",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title: title.trim(),
      description: description ? description.trim() : undefined,
      priority: priority,
      status: status,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });

    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("pending");
    setDueDate("");
  };

  return (
    <Card className="border-primary/20 mb-6 border-2 p-6 shadow-lg">
      <h2 className="text-xl font-semibold">{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid gap-3">
            <Label htmlFor="title" className="font-bold">
              Title *
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              placeholder="Enter task title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Description</Label>
            <Textarea
              id="message"
              value={description}
              placeholder="Type your message here."
              className="resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <Label htmlFor="message">Priority</Label>
              <Select
                value={priority}
                onValueChange={(value) => setPriority(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label htmlFor="message">Status</Label>
              <Select
                value={status}
                onValueChange={(value) => setStatus(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label htmlFor="date" className="font-bold">
                Due Date
              </Label>
              <Input
                id="date"
                type="date"
                value={dueDate}
                placeholder="Enter task title"
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <Button variant="primary" className="flex-1 cursor-pointer">
            {submitLabel}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="flex-1 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TaskForm;
