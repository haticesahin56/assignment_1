import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const [name, setName] = useState('');

  const handleToggle = () => {
    setShowProducts(!showProducts); 
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Product Dashboard</h1>

      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleNameChange}
          style={{ padding: '8px', fontSize: '16px' }}
        />
      </div>

      
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Hello, {name ? name : 'Guest'}
      </p>

      
      <button 
        onClick={handleToggle}
        style={{ padding: '10px 20px', cursor: 'pointer', marginBottom: '20px' }}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      
      {showProducts && <ProductList />}
      
    </div>
  );
}

export default App;