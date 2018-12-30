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

    // Extract values from the props
    const { pitch: { adLibs } } = props;
    const currentAdLib = adLibs[0];
    const currentLead = currentAdLib.lead;
    const currentAdWord = currentAdLib.ads[0];

    this.state = {
      currentAdLib,           // Entire phrase group
      currentLead,            // Persistant lead word
      currentAdWord,          // Current trailing word  
      leadWordVisible: true,  // Lead word animation controller
      adWordVisible: true,    // Trailing word animation controller
      done: false,            // Full pitch controller
      set: 0,
      sets: props.pitch.adLibs.length - 1
    }

    this.pitch = props.pitch;
    this.lead = React.createRef();
    this.adLib = React.createRef();
    this.write = null;
  }

  // #region cycle_helper_functions

  /* ----- Lead word helpers ----- */

  /**
   * Helper: Trigger lead word exit animation
   */
  eraseLeadWord = () => {
    this.setState({ leadWordVisible: false })
  }

  /* ----- AdWord Helpers ----- */
  /**
   * Helper: Dynamic function for delayed execution
   * @param {function}  func Function to be executed after delay; default empty function
   * @param {Number}  intervals A factor to set the length of the delay(count)
   * @param {Number}  delay A factor to set the length of the delay(duration)
   * @returns {Promise} Allow for async use 
   */
  delay = (func = () => { }, intervals = 12, delay = 100) => {
    return new Promise(resolve => {
      this.write = setTimeout(() => {
        func()
        resolve('done');
      }, intervals * delay);
    })
  }

  /**
   * Helper: Triggers adWord exit animation
   */
  eraseAdWord = () => {
    this.setState({ adWordVisible: false })
  }

  /**
   * Helper: Get the position of the current phrase in adWord list
   * @param {String}  word  Word to find
   * @returns {Number}  The index of word in current adWord list
   */
  findAdWordPos = (word) => {
    const { currentAdLib: { ads } } = this.state; // Get current adWord list
    return ads.findIndex(item => item === word);  // Return it's index
  }

  /**
   * Helper: Get the position of the next word to display in the adWord list
   * @param {Number}  pos The current adWords position
   * @returns {Number}  The index of the next possible word in the current adWord list
   */
  findNextAdWordPos = (pos) => {
    const { currentAdLib: { ads } } = this.state; // Get the current adWord list
    return pos === ads.length - 1 ? 0 : pos + 1;  // Return the next index or zero if at list's end
  }

  /**
   * Helper: Find the next adWord in the current list
   * @returns {String}  The next word in the adWord list
   */
  findAdWord = () => {
    const { currentAdLib: { ads }, currentAdWord } = this.state;  // Get reference items from the state
    const currentPos = this.findAdWordPos(currentAdWord);         // Find the current words position
    const nextPos = this.findNextAdWordPos(currentPos);           // Find the next words position

    return ads[nextPos];  //Return the next word
  }

  /* ----- Phrase helpers ----- */

  /**
   * Helper: Get the position of the current phrase in the phrase list
   * @param {Object}  phrase  The phrase to reference position
   * @returns {Number}  The index of the phrase in the phrase list
   */
  findPhrasePos = (phrase) => {
    const { pitch: { adLibs } } = this.props;         // Get phrase list
    return adLibs.findIndex(item => item === phrase); // Return phrase's index in list
  }

  /**
   * Helper: Get the position of the next phrase in the list
   * @param {Number}  pos The current phrase position
   * @returns {Number}  The index of the next phrase
   */
  findNextPhrasePos = (pos) => {
    const { pitch: { adLibs } } = this.props;       // get phrase list
    return pos === adLibs.length - 1 ? 0 : pos + 1; // Return next relative index or cycle back
  }

  /**
   * Helper: Find the next phrase to display
   * @returns {Object}  The next phrase to display
   */
  findPhrase = () => {
    const { pitch: { adLibs } } = this.props; // Get the phrase list
    const { currentAdLib } = this.state;      // Get the current phrase
    const currentPos = this.findPhrasePos(currentAdLib);  // Determine current phrase relative position in list
    const nextPos = this.findNextPhrasePos(currentPos);   // Determine the next phrase position

    return adLibs[nextPos]; // Return new phrase
  }

  /**
   * Helper: trigger the exit animation for the entire displayed phrase
   */
  eraseAll = async () => {
    // Async delay to allow for the trailing word to be animated
    await this.delay(() => {

      // Trigger the exit animation for trailing words
      this.setState({ adWordVisible: false }, () => {

        // Trigger exit animation for lead words
        this.setState({ leadWordVisible: false });
      })
    }, this.state.currentAdWord.length, 55);

    // Async delay to allow the all exiting animations to complete
    await this.delay(() => { }, 1, 340);
  }

  //#endregion


  //#region cycle_controls
  cycleAdWords = async () => {
    await this.delay(this.eraseAdWord, this.state.currentAdWord.length, 90);
    const currentAdWord = await this.findAdWord();
    await this.delay();
    this.setState({ currentAdWord, adWordVisible: true });
    const nextPos = this.findNextAdWordPos(this.findAdWordPos(currentAdWord));

    if (nextPos === 0)
      this.cyclePhrases();
    else
      this.cycleAdWords();
  }

  stopAnimation = async () => {
    // this.eraseAll();
    // await this.delay();
    this.setState({ done: true })
    clearTimeout(this.write);
  }

  /**
   * Control the cycling of multiple pitch phrases with trailing word lists
   */
  cyclePhrases = async () => {
    await this.eraseAll();                // Remove the entire current phrase
    const nextPhrase = this.findPhrase(); // Get the next phrase to render

    const PhrasePos = this.findPhrasePos(this.state.currentAdLib);  //Get the current phrase index for reference
    const AdWordPos = this.findAdWordPos(this.state.currentAdWord); // Get the current trailing words index for reference

    console.log(PhrasePos, AdWordPos)
    // Check: Is last word of the last phrase to render
    if (PhrasePos === this.props.pitch.adLibs.length - 1 && AdWordPos === this.state.currentAdLib.ads.length - 1) {
      this.stopAnimation(); // Stop animation and show entire pitch
    }
    else {
      // Update and trigger lead words animation
      this.setState({
        currentAdLib: nextPhrase,     // Set new phrase
        currentLead: nextPhrase.lead, // Set new lead word
        leadWordVisible: true         // Ensure entering animation reset
      },
        // Callback function after lead state update
        async () => {

          // Async delay to allow lead words entering animation to complete
          await this.delay(() => {

            // Update and trigger trailing words animation
            this.setState(state => ({
              currentAdWord: state.currentAdLib.ads[0], // Set trailing words to new phrase first word in list
              adWordVisible: true                       // Ensure entering animation reset
            }), this.cycleAdWords);

        }, nextPhrase.lead.length, 50)

      })
    }
  }

  startAnimation = () => {
    this.cycleAdWords();
  }

  restartAdLib = () => {
    const { pitch: { adLibs } } = this.props;
    const currentAdLib = adLibs[0];
    const currentLead = currentAdLib.lead;
    const currentAdWord = currentAdLib.ads[0];

    this.setState({ currentAdLib, currentLead, currentAdWord, leadWordVisible: true, adWordVisible: true, done: false }, this.startAnimation);
  };

  //#endregion

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

  componentWillUnmount = () => {
    clearInterval(this.write);
    clearTimeout(this.write);
  }

  render() {
    const { done, currentLead, currentAdWord } = this.state;
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
              <Lead>
                <Type isVisible={this.state.leadWordVisible} words={`${currentLead} `} />
              </Lead>
              <Type isVisible={this.state.adWordVisible} words={currentAdWord} />
              {/* <AdLib ref={this.adLib}></AdLib> */}
              <Blinker>|</Blinker>
            </Line>
          </div>
        }
      </div>
    )
  }
}

const wordPoses = {
  initial: {
    width: 'fit-content',
  },
  exit: {
    width: 0,
    transition: { ease: 'anticipate', duration: 10 },
    afterChildren: true,
  }
}

const charPoses = {
  initial: {
    opacity: 0,
    width: 0,
  },
  enter: {
    opacity: 1,
    width: 'fit-content',
    transition: { ease: 'anticipate' },
    delay: ({ charIndex }) => charIndex * 50
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: { ease: 'anticipate' },
  }
}


const Type = ({ words, color, isVisible }) => (
  <PoseGroup>
    <SplitText color={color} key='1' initialPose='initial' wordPoses={wordPoses} charPoses={charPoses} pose={isVisible ? 'enter' : 'exit'}>{words}</SplitText>
  </PoseGroup>
)