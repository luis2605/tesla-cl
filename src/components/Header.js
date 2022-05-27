import React, {useState} from 'react'
import styledComponents from 'styled-components'
import menuTitles from "./menuTitles.json"
import burgerMenuTitles from "./burgerMenuTitles.json"
import MenuIcon from '@mui/icons-material/Menu';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';


function Header(props) {

    const[burgerOpen, setBurgerOpen] = useState(true)

    function toggleStatusBurger(){
        
        setBurgerOpen(burgerOpen => !burgerOpen)
       
     
       
    }

    const menuElements = menuTitles.map(item =>{
        return(
            <p><a href={`#${item.menuTitle}`}>{item.menuTitle}</a></p>
        )
    })
    const burgerMenuElements = burgerMenuTitles.map(item =>{
        return(
            <p><a href={`#${item.menuTitle}`}>{item.menuTitle}</a></p>
        )
    })

  

  return (
    <Container>
        <a href='https://www.tesla.com/de_de'>
             <img src={process.env.PUBLIC_URL+"/images/logo.svg "} alt="tesla-icon"/>
        </a>
        <Menu>
            {menuElements}
        </Menu>
        <HamburgerMenu click={burgerOpen}>
            <CustomExitMenuIconContainer>
                <CostumExitMenuIcon  onClick={ (toggleStatusBurger)}/>
            </CustomExitMenuIconContainer>
            {burgerMenuElements}

        </HamburgerMenu>
        <RightMenu>
            <p><a href='#'>Shop</a></p>
            <p><a href='#'>Tesla Account</a></p>
            <CostumMenuIcon onClick={(toggleStatusBurger)}/>

        </RightMenu>
        
    </Container>
  )
}

export default Header

const Container = styledComponents.div`
min-height:3em;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 1em;
width:100%;
z-index:1;

`
const Menu = styledComponents.div`
display:flex;
align-items:center;
flex-wrap:nowrap;
p{
    font-weight:600;
    text-transform:uppercase;
    padding:0 .5em;
    
}

@media(max-width:768px){
    display:none;
}

`
const RightMenu =styledComponents.div`
display:flex;
align-items:center;

p{
    font-weight:600;
    text-transform:uppercase;
    padding:0 1em 0 0

   
}
a{
    @media (max-width:768px){
        display:none;
    }
    
}


`
const CostumMenuIcon =styledComponents(MenuIcon)`


`
const CostumExitMenuIcon=styledComponents(CloseTwoToneIcon)`
margin:.5em 1em 0 0;




`
const HamburgerMenu =styledComponents.div`


background:var(--background-w);
position:fixed;
width:300px;
top:0;
right:0;
bottom:0;
z-index:1000;
display:flex;
flex-direction:column;
text-align:start;

p{
    margin:.75em .3em .85em .5em;
}
p::after{
    content:"";
    display:block;
    position:absolute;
    width:80%;
    border-bottom:2px solid var(--color-font);
    opacity:0.5;
    z-index:1000;
    
    
}
transition:transform ease-in 300ms;
transform:${props => props.click?  "translateX(100%)" : "translateX(0)" } ;

`
const CustomExitMenuIconContainer=styledComponents.div`
width:100%;
display:flex;
justify-content:flex-end;


`