import './App.css';
import foods from './foods.json';
import AppExample from './AppExample'
import FoodBox from './FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './AddFoodForm'

function App() {
  return (
    <>
      <AddFoodForm />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {
      foods.map((elt) => {
        return(
          <FoodBox className="foodbox" food={ {
            name: elt.name,
            calories: elt.calories,
            image: elt.image,
            servings: elt.servings
            }} />
        )
      })
    }
      </Row>
    
  
    
    
    </>
     
  );
}

export default App;
