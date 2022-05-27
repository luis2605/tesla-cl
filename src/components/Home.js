import React,{useState} from 'react'
import styledComponents from 'styled-components';
import Section from './Section';
import carInfo from "./carInfo.json"

function Home() {

    const carInfoProcessed = carInfo.map(item =>{
        return(
            <Section 
           
            title={item.title}
            description={item.description}
            leftBtnText={item.leftBtnText}
            rightBtnText={item.rightBtnText}
            image ={item.image}/>
        )
    })
 
  

  


  return (
    <Container>
      {carInfoProcessed}
        

    </Container>
  )
}

export default Home

const Container = styledComponents.div `
height:100vh;
;

`
