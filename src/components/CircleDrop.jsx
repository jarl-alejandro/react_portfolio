import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 1000;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.span`
  width: 30px;
  height: 30px;
  background: ${({ show }) => show ? 'lightgrey' : 'grey'};
  border-radius: 50%;
  position: relative;
  color: ${({ show }) => show ? 'black' : 'white'};

  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`;

const Select = styled.div`
  z-index: 3000;
  position: fixed;
  border-radius: 2% 5% 5% 5%;
  background: ${({ show }) => show ? 'grey' : 'transparent'};
  width: ${({ show }) => show ? 90 : 1}vw;
  height: ${({ show }) => show ? 50 : 1}vh;
  transition: all 350ms ease-in;
`;


const determinePos = ({ idx, arr }) => {
  const count = arr.length;
  const totalLength = Math.floor(window.innerWidth * 0.8 / 100);
  const usableLength = totalLength > 6 ? 6 : totalLength;
  const cols = usableLength;
  const rows = Math.ceil(count / cols);
  console.log(window.innerWidth, totalLength, usableLength)
  const width = window.innerWidth * 0.8 / usableLength;
  const angle = 1.7453 / rows;

  const x = idx % cols;
  const y = Math.floor(idx / cols);

  const radius = width * (x + 1);
  const theta = y * angle;

  const offSetX = -0;
  const offSetY = 0;

  const xPos = radius * Math.cos(theta) + offSetX;
  const yPos = radius * Math.sin(theta) + offSetY;

  return `translate(${xPos}px, ${yPos}px) rotate(${theta}rad)`
}

const Option = styled.div`
  z-index: 2000;
  position: relative;

  @media screen and (min-width: 480px) {
    position: absolute;
    transform: ${determinePos};
  }
`;

export default class CircleDrop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  render() {

    const { tags, handleChange } = this.props;
    const { show } = this.state;

    return (
      <>
        {/* <Select {...this.state}>
          <Circle onClick={_ => this.setState(state => ({ show: !state.show }))} {...this.state}>
            <i className={`fas fa-${show ? 'times' : 'filter'}`}></i>
            {show && tags.map((tag, idx, arr) => <Option key={tag} idx={idx} arr={arr} onClick={_ => handleChange(tag)}>{tag ? tag : 'All'}</Option>)}
          </Circle>
        </Select> */}

        
      </>
    )
  }
}

