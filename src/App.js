
import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = "https://random-data-api.com/api/v2/appliances"
function App() {

const [brand, setBrand] = useState('')
const [equipment, setEquipment] = useState('')

useEffect(() => {
  axios.get(URL)
  .then((response)=>{
  setBrand(response.data.brand)
  setEquipment(response.data.equipment)
  }).catch((error)=>{
    alert(error)
  })
}, [])

  return (
    <div >
      <h3>Randomly selected appliance</h3>
      <p>Brand:{brand}</p>
      <p>Equipment:{equipment}</p>
    
    </div>
  );
}

export default App;
