import { useState } from 'react'
import Title from './component/title.jsx'
import MediaCard from './component/employecard.jsx'
import Container from '@mui/material/Container';
import data from "./data/data.js/";
import Switch from '@mui/material/Switch';

import './App.css'
const label = { inputProps: { 'aria-label': 'Switch demo' } };



function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [ShowInactive, setShowInactive] = useState(false);

  const filteredData= ShowInactive ? data.filter((employee )=> employee.onLeave ) : data;

  const handleToggle = (event) => {
    setShowInactive(event.target.checked);
    console.log(event.target.checked)
   }
  
  
  return (
    <Container maxWidth="lg">
      <Switch onClick={handleToggle}/>
    <MediaCard employee= {filteredData}/>



    </Container>
    
  )
}

export default App