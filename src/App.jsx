import { useState } from 'react'
import Title from './component/title.jsx'
import MediaCard from'./component/employecard.jsx'
import Container from '@mui/material/Container';
import data from './data/data.js';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(data);
  
  return (
    <Container fixed>

    <MediaCard/>
    <MediaCard/>
    <MediaCard/>
    <MediaCard/>

    </Container>
  )
}

export default App
