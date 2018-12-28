import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import posed, { PoseGroup } from 'react-pose'
import SplitText from 'react-pose-text';
import computer from '../images/computer.jpg';

const Line = styled.h2`
  color: white;
  // font-size: 1.25em;

  @media screen and (min-width: 960px) {
    // font-size: inherit;
  }
`;

const Complete = styled.div`
  color: white;
  font-size: 0.90em;

  @media screen and (min-width: 960px) {
    font-size: inherit;
  }
`;

const Lead = styled.span`
  color: red;
`;

// const AdLib = styled.span`

// `;

const blink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
`;

const Blinker = styled.span`
  animation: ${blink} 1.5s linear infinite;
`;

const Hero = styled.img`
  width: 100%;
  height: 80vh;
`;

export default class ElevatorPitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adWordVisible: true,
      done: false,
      set: 0,
      sets: props.pitch.adLibs.length - 1
    }

    this.pitch = props.pitch;
    this.lead = React.createRef();
    this.adLib = React.createRef();
    this.write = null;
  }

  startAnimation = () => {
    setInterval(() => {
      this.setState(state => ({ adWordVisible: !state.adWordVisible }))
    }, 12 * 100);
  }

  componentDidMount() {
    const { done, set } = this.state;

    if (!done)
      this.startAnimation();
    //   this.startAdLib(this.pitch.adLibs[set]);
  }

  writeChar = (char, el) => {
    el.innerHTML += char; // Concat char to current innerHTML 
  };

  writeString = (str, el, interval) => {
    const length = str.length;
    let count = 0;
    let write = null;

    write = setInterval(() => {
      if (count < length) {
        this.writeChar(str[count], el);
        count++;
      }
      else
        clearInterval(write);

    }, interval);

  }

  eraseChar = (el) => {
    const strArr = el.innerHTML.split('');  // Split into an array
    strArr.pop();                           // Remove the last char
    const str = strArr.join('');            // Convert new array back to string
    el.innerHTML = str;                     // Write new string to element
  };

  eraseString = (el, interval) => {
    let erase = null;

    erase = setInterval(() => {
      if (el.innerHTML.length !== 0) {
        this.eraseChar(el);
      }
      else {
        clearInterval(erase);
        return true;
      }

    }, interval);
  };

  cycleAdLibs = (ads, interval) => {
    const ad = this.adLib.current;  // Element to write to
    let previous = '';
    let next = true;                // Track when to move to next word
    let idx = 0;

    // Start interval
    this.write = setInterval(() => {
      // Ready for next word
      if (next) {

        // End of list, recycle or move on
        if (idx === ads.length - 1) {
          clearInterval(this.write); // stop the current cycle
          this.nextSet();
          return;               // Exit function
        }

        // Not the first iteration 
        else if (previous) {
          idx += 1; // Move to nex word
        }

        this.writeString(ads[idx], ad, interval);   // Write the string
        next = false;                               // Block next word
      }

      // Typing or erasing
      else {

        // End of typing the word
        if (ad.innerHTML.length === ads[idx].length) {
          previous = ad.innerHTML;  // Store the word
          this.eraseString(ad, 50); // Erase the word

          // 
          setTimeout(() => {
            next = true;
          }, interval / 2 * previous.length);
        }
      }

    }, interval);
  }

  startAdLib = (adLib) => {
    const lead = this.lead.current;

    const leadPhrase = adLib.lead + ' ';
    const { ads } = adLib;

    if (lead.innerHTML.length !== 0) {
      this.eraseString(lead);
    }

    this.writeString(leadPhrase, lead, 150);

    setTimeout(() => {
      this.cycleAdLibs(ads, 100);
    }, 150 * leadPhrase.length);
  };

  nextSet = () => {
    const { set, sets } = this.state;
    let next;

    if (set < sets) {
      next = set + 1;
      this.startAdLib(this.pitch.adLibs[next]);
      this.setState({ set: next });
    }
    else {
      next = 0;
      // this.startAdLib(this.pitch.adLibs[next]);
      this.setState({ set: next, done: true });
    }
  };

  restartAdLib = () => {
    this.setState({ done: false, set: 0 }, () => {
      this.startAdLib(this.pitch.adLibs[this.state.set]);
    })
  };

  componentWillUnmount = () => {
    clearInterval(this.write)
  }

  render() {
    const { done } = this.state;
    return (
      <div id='hero' className='uk-inline'>
        <Hero data-src={computer} width='100%' height='100%' alt="Computer desk" data-uk-img />
        {
          done &&
          <>
            <Complete className='uk-overlay uk-overlay-primary uk-position-bottom uk-animation-slide-bottom'>
              <p>{this.pitch.complete}</p>
            </Complete>
            <button className='uk-position-bottom-right uk-padding-small uk-animation-slide-right' data-uk-icon='refresh' onClick={this.restartAdLib}></button>
          </>
        }

        {
          !done &&
          <div className='uk-overlay uk-position-bottom'>
            <Line>
              {/* <Lead ref={this.lead}></Lead> */}
              {console.log(typeof this.state.currentLead)}
              {/* <Lead>
                <Type words={`${this.state.currentLead} `} />
              </Lead> */}
              <Type isVisible={this.state.adWordVisible} words='Hello world' />
              {/* <AdLib ref={this.adLib}></AdLib> */}
              <Blinker>|</Blinker>
            </Line>
          </div>
        }
      </div>
    )
  }
}

const charPoses = {
  initial: {
    // color: ({ color }) => color ? color : 'inherit',
    opacity: 0,
    width: 0,
  },
  enter: {
    opacity: 1,
    width: 'inherit',
    transition: { ease: 'anticipate' },
    delay: ({ charIndex }) => charIndex * 75
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: { ease: 'anticipate' },
    delay: ({ charIndex }) => charIndex * 25
  }
}

const Type = ({ words, color, isVisible }) => (
  <PoseGroup>
    <SplitText color={color} key='1' initialPose='initial' charPoses={charPoses} pose={isVisible ? 'enter' : 'exit'}>{words}</SplitText>
  </PoseGroup>
)