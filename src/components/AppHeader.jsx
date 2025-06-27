import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const AppHeader = ({
  handleShowClick,
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="mb-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-foreground mb-2 text-4xl font-bold">
            Todo Flow Pro
          </h1>
          <span className="text-muted-foreground">
            {completedTasks} of {totalTasks} tasks completed
          </span>
        </div>
        <div>
          <Button
            onClick={handleShowClick}
            className="bg-primary text-primary-foreground cursor-pointer shadow-lg"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" /> Add Task
          </Button>
        </div>
      </div>
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />

        <Input
          type="text"
          placeholder="Search Task"
          className="bg-white py-3 pl-10 text-lg shadow-sm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AppHeader;
