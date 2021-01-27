/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styled from 'styled-components';

import futureThemes from '../../../future_themes.json';

const Wrapper = styled.div`
display: flex;
  position: absolute;
  top: 0;
  border: 0;
  left: 0;
  z-index: 20;

`;

const Header = styled.div`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;


// export default () => (
//   <>
//     <div style={{ width: '56px', height: 'auto', backgroundColor: 'rgba(255,255,255,0.4)', margin: "10px", padding:"5px", borderRadius:"8px", border: "1px solid black" }}>
//       <img src={`${futureThemes[0].icon}`} style={{width: "100%"}}/>
//     </div>
//   </>
// );



const Icon = styled.div`
  width: 56px;
  height: auto;
  background-color: rgba(255,255,255,0.5);
  margin: 10px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid black;

  ${this}:hover{
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Image = styled.img`
  width: 100%;
`;


// https://www.flaticon.com/free-icon/pumpkin_685859?term=halloween&related_id=685859


export default () => {
    const [selected, setSelected] = useState(0);
    console.log(selected)
    return (
  <>
  <Wrapper>
    <Icon onClick={() => setSelected(0)}>
      <Image src={(selected === 0) ? futureThemes[0].icon_selected : futureThemes[0].icon} />
    </Icon>
    <Icon onClick={() => setSelected(1)}>
      <Image src={(selected === 1) ? futureThemes[1].icon_selected : futureThemes[1].icon} />
    </Icon>
    </Wrapper>
  </>
  )
}

