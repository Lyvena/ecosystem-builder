import React from 'react';
import { TaskList } from './TaskList';
import { ResourceHub } from './ResourceHub';
import { NetworkGraph } from './NetworkGraph';

export const AgentDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TaskList />
      <ResourceHub />
      <NetworkGraph />
    </div>
  );
};