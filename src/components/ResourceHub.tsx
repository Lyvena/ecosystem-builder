import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ResourceHub = () => {
  const resources = [
    { id: 1, title: "Funding Opportunities Guide", type: "PDF" },
    { id: 2, title: "Community Engagement Strategies", type: "Video" },
    { id: 3, title: "AI Ethics Framework", type: "Document" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Hub</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource.id} className="flex justify-between items-center">
              <span>{resource.title}</span>
              <div>
                <span className="mr-2 px-2 py-1 rounded bg-blue-200 text-blue-800 text-sm">
                  {resource.type}
                </span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};