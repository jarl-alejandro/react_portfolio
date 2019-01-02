import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { PoseGroup } from 'react-pose'
import SplitText from 'react-pose-text';
import computer from '../images/computer/computer.jpg';
import computerUW from '../images/computer/computer_uw.jpg';
import computer1080 from '../images/computer/computer_1080.jpg';
import computer720 from '../images/computer/computer_720.jpg';
import computer520 from '../images/computer/computer_520.jpg';
import computerSmall from '../images/computer/computer_small.jpg';

//#region style_components

const Line = styled.h2`
  color: white;
  width: 100%;
`;

const Phrase = styled.span`
  font-size: 100%;
`;

const Complete = styled.div`
  color: white;
  font-size: 100%;
`;

const Lead = styled.span`
  color: red;
`;

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
  // height: 80vh;
`;

//#endregion

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
    }

    this.hero = React.createRef();
    this.pitch = props.pitch;
    this.write = null;        // For managing timed events
  }

  //#region cycle_helper_functions

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

  /**
   * Control the cycling of a list of trailing words
   */
  cycleAdWords = async () => {

    // Check if first render of the phrase
    if (this.findAdWordPos(this.state.currentAdWord) === 0)
      // Set delay to account for the animation of the lead/ trailing word
      await this.delay(this.eraseAdWord, this.state.currentLead.length + this.state.currentAdWord.length, 60);
    else
      // Otherwise, only delay for the trailing word animation
      await this.delay(this.eraseAdWord, this.state.currentAdWord.length, 60);

    const currentAdWord = this.findAdWord();  // Get next word to render

    // Set delay for the exiting animation of the word before setting new word
    await this.delay(() => {
      this.setState({ currentAdWord, adWordVisible: true });  // Set new word and ensure enter control reset
    }, 1, 400);

    // Get the index of the next word for reference
    const nextPos = this.findNextAdWordPos(this.findAdWordPos(currentAdWord));

    // Check: At the end of the word list
    if (nextPos === 0) {

      // Check: Is it the last word in the last phrase
      if (this.findPhrasePos(this.state.currentAdLib) === this.props.pitch.adLibs.length - 1 && this.findAdWordPos(this.state.currentAdWord) === this.state.currentAdLib.ads.length - 1) {
        this.cycleAdWords();                // Animate last word
        await this.delay(                   // Set delay for the completion of the last word animation
          this.stopAnimation,               // Stop the animation
          this.state.currentAdWord.length,  // Length of the last word
          60                                // Interval between character
        )
      }
      else
        this.cyclePhrases();  // Move to the next phrase
    }
    else
      this.cycleAdWords();    // Move to next word in the list
  }

  /**
   * Control for stopping the animation and clear timed events
   */
  stopAnimation = () => {
    this.setState({ done: true });  // Change between phrases and complete pitch
    clearTimeout(this.write);       // Ensure timeouts are cleared
  }

  /**
   * Control the cycling of multiple phrases with trailing word lists
   */
  cyclePhrases = async () => {
    await this.eraseAll();                // Remove the entire current phrase
    const nextPhrase = this.findPhrase(); // Get the next phrase to render

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

  /**
   * Control for starting the animation
   */
  startAnimation = () => {
    this.cycleAdWords();
  }

  /**
   * Control for restarting animation
   */
  restartAdLib = () => {

    const { pitch: { adLibs } } = this.props;   // Parse original data for use
    const currentAdLib = adLibs[0];             // Set phrase to first phrase
    const currentLead = currentAdLib.lead;      // Set the lead words
    const currentAdWord = currentAdLib.ads[0];  // Set the trailing words to the first set in the list

    // Set new data and reset controllers
    this.setState({
      currentAdLib,           // Phrase
      currentLead,            // Lead words
      currentAdWord,          // Trailing words
      leadWordVisible: true,  // Lead controller
      adWordVisible: true,    // Trailing controller
      done: false             // Phrase/Pitch controller
    },
      this.startAnimation     // Callback: trigger phrase animation
    );
  };

  //#endregion

  //#region lifecycle
  componentDidMount() {
    const { done } = this.state;

    if (!done) {
      while (!this.hero);
      this.startAnimation();
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.write);
  }

  //#endregion

  render() {
    const { done, currentLead, currentAdWord } = this.state;
    return (
      <div id='hero' className='uk-inline'>

        {/* Responsive hero image */}
        <picture>
          <source media='(min-aspect-ratio: 16/10)' srcSet={computerUW} />
          <source media='(max-aspect-ratio: 16/10) and (max-width: 1080px) and (min-width: 721px)' srcSet={computer1080} />
          <source media='(max-aspect-ratio: 16/10) and (max-width: 720px) and (min-width: 521px)' srcSet={computer720} />
          <source media='(max-width: 520px) and (min-width: 401px)' srcSet={computer520} />
          <source media='(max-width: 400px)' srcSet={computerSmall} />
          <img src={computer} alt='Hero Image' />
        </picture>

        {/* Hero image for backdrop */}
        {/* <Hero ref={this.hero} data-src={computer} alt="Computer desk" data-uk-img /> */}

        {/* Show the entire pitch when animation is done */}
        {
          done &&
          <>

            {/* Pitch string container */}
            <Complete className='uk-overlay uk-overlay-primary uk-position-bottom uk-animation-slide-bottom'>
              <p>{this.pitch.complete}</p>
            </Complete>

            {/* Reset animation button */}
            <button className='uk-position-bottom-right uk-padding-small uk-animation-slide-right' data-uk-icon='refresh' onClick={this.restartAdLib}></button>
          </>
        }

        {/* Animation is active */}
        {
          !done &&
          <div className='uk-overlay uk-position-bottom'>
            {/* Phrase container */}
            <Line>

              {/* Lead string container */}
              <Phrase>
                <Lead>

                  <Type isVisible={this.state.leadWordVisible} words={`${currentLead} `} />
                </Lead>

                {/* Trailing string container */}
                <Type isVisible={this.state.adWordVisible} words={currentAdWord} />

                {/* Blinking cursor */}
                <Blinker>|</Blinker>
              </Phrase>
            </Line>
          </div>
        }
      </div>
    )
  }
}

//#region posed_text

// Config for word level animations
const wordPoses = {
  initial: {
    width: 'fit-content',
  },
  exit: {
    width: 0,
    transition: { ease: 'easeInOut', duration: 10 },
    afterChildren: true,  // Happens after the character exit animation
  }
}

// Config for character level animations
const charPoses = {
  initial: {
    opacity: 0,
    width: 0,
  },
  enter: {
    opacity: 1,
    width: 'fit-content',
    transition: { ease: 'anticipate' },
    delay: ({ charIndex }) => charIndex * 50  // Character flow control
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: { ease: 'anticipate' },
  }
}

/**
 * Helper component to manage animations. Uses react-pose and react-pose-text courtesy of Popmotion
 * @param {String} words String to animate
 * @param {Boolean} isVisible Pose control
 * @returns {Object}  Posed React Component
 */
const Type = ({ words, isVisible }) => (
  <PoseGroup>
    <SplitText
      key='txt'
      initialPose='initial'
      wordPoses={wordPoses}
      charPoses={charPoses}
      pose={isVisible ? 'enter' : 'exit'}
    >
      {words}
    </SplitText>
  </PoseGroup>
)

//#endregion