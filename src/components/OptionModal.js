import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
    //determines whether the window opens or not
      isOpen={!!props.selectedOption}
    //This prop add the functionality of exiting the modal by pressing on the outside of the screen.
      onRequestClose={props.selectedOptionClear}
    //Used for users with accessibility options turned on.
      contentLabel="Selected Option"
      closeTimeoutMS={200}//This increases the amount of time it takes for the modal to leave the screen.
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.selectedOptionClear}>okay</button>
    </Modal>
)

export default OptionModal