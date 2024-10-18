import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const NetworkGraph = () => {
  const data = [
    { name: 'Jan', connections: 4, interactions: 24 },
    { name: 'Feb', connections: 7, interactions: 35 },
    { name: 'Mar', connections: 10, interactions: 50 },
    { name: 'Apr', connections: 15, interactions: 75 },
    { name: 'May', connections: 20, interactions: 100 },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Network Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="connections" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="interactions" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};