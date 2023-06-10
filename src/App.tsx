import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { DemoService } from './api/Service';

function App() {

  const [buttonText, setButtonText] = useState("Not Here");

  useEffect(() => {
    document.title = 'My Project';
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await DemoService.test();
      setButtonText(response.data);
    }
    getData();
  }, []);

  
  return (
    <Button variant='contained' size='small' onClick={() => alert('You clicked a button.')}>{buttonText}</Button>
  );
}

export default App;
