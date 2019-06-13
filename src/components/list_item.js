import React from 'react'
import Modal from 'react-modal';
import PresentForm from './present_form'

// Modal.setAppElement('#yourAppElement')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <>
        <div className='list-item' onClick={this.openModal}>
          <img className='list-image' src={this.props.image} alt='nós' />
          <div className='list-text'>
            {this.props.text}
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.text}
          style={customStyles}
          ariaHideApp={false}
        >
          <h2>{this.props.text}</h2>

          {this.props.description === 'cutipol' ?
            <div> 
              <p>Este presente está em lista na <strong>Cutipol</strong>. <br /></p>
              <p>Pode ser oferecido na loja ou acedendo ao&nbsp;
                <a href='http://cutipol.pt/listas/listas.php' 
                  target='_blank'
                  rel="noopener noreferrer"
                >
                website
                </a>
              <br />usando os seguintes dados:</p>
              <ol>
                <li>Username: <em>cbmcrc</em></li>
                <li>Password: <em>210919</em></li>
              </ol>
            </div> :
            <div>
              <p> {this.props.description} </p>
              <PresentForm 
              present={this.props.text}
              />
            </div>}
        </Modal>
      </>
    )
  }
}

export default ListItem
