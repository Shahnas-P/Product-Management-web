import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter  as Router ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <AddProductForm/>
    <ProductList/> */}
<Routes>
  <Route path='/' element={<AddProductForm/>} />
  <Route path='/view/:id'element={<ProductDetails/>} /> 
</Routes>
    </div>
    </Router>
  );
}

export default App;
