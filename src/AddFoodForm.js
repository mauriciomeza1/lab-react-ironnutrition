import { useState } from "react"
import { Divider, Input } from 'antd';


function AddFoodForm(props) {

    

    const [newFood, setNewFood] = useState({
        name: "",
        calories: 0,
        image: "",
        servings: 0 
    })
    
    const [list, setList] = useState([])

    const check = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
    
        setNewFood({
            ...newFood,
            [event.target.name]: event.target.value
        })
    }

    

    const handleSubmit = (event) => {
        
        setList([
            ...list,
            newFood
        ])
        
        setNewFood ({
            name: "",
            calories: "",
            image: "",
            servings: ""
        })
        
    }


  return (
    <form style={{padding: '0 45px 0 45px'}} onSubmit={(event) => {handleSubmit(event)}}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={newFood.name} type="text" onChange={(event) => {check(event)}} />

      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={(event) => {check(event)}} />

      <label>Calories</label>
      <Input name="calories" value={newFood.calories} type="text" onChange={(event) => {check(event)}} />

      <label>Servings</label>
      <Input name="servings" value={newFood.servings} type="text" onChange={(event) => {check(event)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;

