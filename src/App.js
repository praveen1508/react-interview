import logo from './logo.svg';
import './App.css';
import FormComponent from './form/FormComponent';
import withProductIdComponent from './form/withProductIdComponent';

function App() {
  const Product = withProductIdComponent(FormComponent);
  return (
    <Product name='ram'/>
  );
}

export default App;
