
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Layout from './components/layout/Layout';
import { fetchProducts } from './redux/slice/allProductsSlice';

function App() {

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchProducts())
  }, [dispatch]);
  
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
