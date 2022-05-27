import React, { useState } from "react";

import styledComponents from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, leftBtnText, rightBtnText, image }) {
  //unpacking the Object in its props.Cooler way of passing props.

  return (
    <div id={title}>
      <Wrap bgImage={image}>
        <Fade bottom>
          <ItemText>
            <h1>
              <a href="#">{title}</a>
            </h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftBtn>{leftBtnText}</LeftBtn>
              {rightBtnText && ( //if rightBtnText exists, only then render RightBtn. If not leave empty.
                <RightBtn>{rightBtnText}</RightBtn>
              )}
            </ButtonGroup>
          </Fade>
          <DownArrow src={process.env.PUBLIC_URL+"/images/down-arrow.svg"}  />
        </Buttons>
      </Wrap>
    </div>
  );
}

export default Section;

const Wrap = styledComponents.div`                                              //styledComponents are ok . I have to get use to the sintaxys .
 width:100vw;
 height:100vh;
 background-image: ${(props) => `url(${props.bgImage})`};
 background-size: cover;
 background-position:center;
 background-repeat:no-repeat;
 background-image:;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;

`;
const ItemText = styledComponents.div`
 padding-top:15vh;
 text-align:center;

`;
const ButtonGroup = styledComponents.div`
display:flex;
flex-direction:row;
@media (max-width:768px){
    flex-direction:column;
}

`;
const LeftBtn = styledComponents.div`
background-color: var(--btn-background);
width:15em;
height:2.5em;
margin:.5em 1.5em 1em 1.5em;
color:var(--background-w);
display:flex;
align-items:center;
justify-content:center;
border-radius:25px;
text-transform:uppercase;
font-size:.8rem;
cursor:pointer;
opacity:0.9;

`;

const RightBtn = styledComponents(LeftBtn)`
background:white;
color:var(--color-font)

`;

const DownArrow = styledComponents.img`
margin:.5em 0 .5em 0;
height:3em;

animation:animateDown infinite 1.5s;
`;
const Buttons = styledComponents.div``;
