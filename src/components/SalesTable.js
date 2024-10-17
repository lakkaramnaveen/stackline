import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/SalesTable.css';  // Import the styles

const SalesTable = () => {
  const productData = useSelector(state => state.productData);

  if (!productData || !productData.sales) {
    return <div>Loading sales data...</div>;
  }

  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Week Ending</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retailer Margin</th>
        </tr>
      </thead>
      <tbody>
        {productData.sales.map((sale, index) => (
          <tr key={index}>
            <td>{sale.weekEnding}</td>
            <td>${sale.retailSales.toLocaleString()}</td>
            <td>${sale.wholesaleSales.toLocaleString()}</td>
            <td>{sale.unitsSold}</td>
            <td>${sale.retailerMargin.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
