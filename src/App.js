import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './redux/actions';
import SalesTable from './components/SalesTable';
import SalesGraph from './components/SalesGraph';
import ProductDetails from './components/ProductDetails';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productData);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/0'); // Fetching from JSON server
        const data = await response.json();
        dispatch(setProductData(data));  // Dispatching the fetched data to Redux store
        setLoading(false); // Data fetched successfully, turn off loading
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  // Render a loading state while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If productData is empty or undefined, show a loading message
  if (!productData || Object.keys(productData).length === 0) {
    return <div>No product data available</div>;
  }

  return (
    <div>
      <ProductDetails />
      <SalesGraph />
      {/* <SalesTable /> */}
    </div>
  );
};

export default App;
