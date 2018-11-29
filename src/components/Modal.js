import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/Modal.css';

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch({type: 'HIDE_MODAL'})
  }
}

class ConnectedModal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.listenKeyboard = this.listenKeyboard.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.listenKeyboard, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listenKeyboard, true);
  }

  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.handleClose(event);
    }
  }

  handleClose(event) {
    event.preventDefault();
    this.props.hideModal();
  }

  render() {
    return (
      <div className="Modal-overlay">
        <section className="Modal-content">
          <FontAwesomeIcon icon="times" className="close" onClick={ this.handleClose } />

          <p>{ this.props.description }</p>
          <button onClick={ this.handleClose }>Close</button>
        </section>
      </div>
    )
  }
}

const Modal = connect(null, mapDispatchToProps)(ConnectedModal);

Modal.propTypes = {
  description: PropTypes.string
};

export default Modal;
