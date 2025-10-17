import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Funnel } from "lucide-react";

const TodoFilters = ({ filters, setFilters }) => {
  return (
    <div className="my-8 flex gap-3 border-none">
      <div className="flex items-center space-x-2">
        <Funnel size={16} />
        <span className="font-bold">Filters:</span>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div>
          <Select
            value={filters.status}
            onValueChange={(value) => setFilters({ ...filters, status: value })}
          >
            <SelectTrigger className="border-border w-40 border-1 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            value={filters.priority}
            onValueChange={(value) =>
              setFilters({ ...filters, priority: value })
            }
          >
            <SelectTrigger className="border-border w-40 border-1 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            value={filters.dueDate}
            onValueChange={(value) =>
              setFilters({ ...filters, dueDate: value })
            }
          >
            <SelectTrigger className="border-border w-40 border-1 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TodoFilters;
