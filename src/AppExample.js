import { useState } from "react"
import foods from './foods.json';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className="App">

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
