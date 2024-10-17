import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import '../styles/SalesGraph.css';  // Import the styles

const SalesGraph = () => {
  const productData = useSelector((state) => state.productData);

  return (
    <div className="sales-graph">
      <h2>Retail Sales</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={productData.sales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekEnding" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
