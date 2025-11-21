import { Button } from "@/components/ui/button";
import { Moon, Plus, Search, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";

const AppHeader = ({
  onShowClick,
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  theme,
  setTheme,
}) => {
  return (
    <div className="mb-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-foreground mb-2 text-xl font-bold md:text-4xl">
            Todo Flow Pro
          </h1>
          <span className="text-muted-foreground md:text-md text-sm">
            {completedTasks} of {totalTasks} tasks completed
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="primary"
            onClick={onShowClick}
            className="cursor-pointer shadow-lg md:space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span className="hidden md:block">Add Task</span>
          </Button>
          <div className="border-border flex items-center rounded-full border-2 p-1">
            <Button
              className={`${theme !== "dark" && "bg-primary-foreground"} cursor-pointer rounded-full p-2`}
              onClick={() => setTheme("")}
            >
              <Sun size={18} />
            </Button>
            <Button
              className={`${theme === "dark" && "bg-primary/20"} cursor-pointer rounded-full p-2`}
              onClick={() => setTheme("dark")}
            >
              <Moon size={18} />
            </Button>
          </div>
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
