
import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
function PetCounseling() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })
    const thisPageHeader= 'OrthopedicSurgery';

  return (
    <div className="App">
      <Box sx={{  color:'orange', fontSize: 18, lineHeight: 1.4, 
    paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      
      <Title order={1}> {thisPageHeader}</Title>
      <div>
      
      </div>
      </Box> 
        <Cards></Cards>
        <Cards></Cards> 
    </div>
  );
}

export default PetCounseling;

