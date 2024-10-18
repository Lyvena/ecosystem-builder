import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const TaskList = () => {
  const { toast } = useToast();

  const tasks = [
    { id: 1, title: "Research potential partners", status: "In Progress" },
    { id: 2, title: "Organize community event", status: "Pending" },
    { id: 3, title: "Update resource database", status: "Completed" },
  ];

  const handleTaskComplete = (taskId: number) => {
    toast({
      title: "Task Completed",
      description: `Task ${taskId} has been marked as completed.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center">
              <span>{task.title}</span>
              <div>
                <span className={`mr-2 px-2 py-1 rounded text-sm ${
                  task.status === "Completed" ? "bg-green-200 text-green-800" :
                  task.status === "In Progress" ? "bg-yellow-200 text-yellow-800" :
                  "bg-gray-200 text-gray-800"
                }`}>
                  {task.status}
                </span>
                <Button onClick={() => handleTaskComplete(task.id)} size="sm">Complete</Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};