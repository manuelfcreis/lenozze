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
    transform             : 'translate(-50%, -50%)',
    maxHeight             : '80vh',
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
    this.renderCutipol = this.renderCutipol.bind(this)
    this.renderPreco = this.renderPreco.bind(this)
    this.renderOferecido = this.renderOferecido.bind(this)
    this.selectRender = this.selectRender.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentDidUpdate() {
    if (this.state.modalIsOpen) {
      window.history.pushState('forward', null, './#modal');

      window.addEventListener('popstate', (event) => {
        if (this.state.modalIsOpen) {
          event.preventDefault();
          this.closeModal();
          window.removeEventListener('popstate', () => {});
        }
      })
    } else {
      window.history.pushState('forward', null, './');
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderCutipol() {
    return(
      <div>
        <p>Este presente está na lista de casamento na <strong>Cutipol</strong>. <br /></p>
        <p> Pode ser oferecido directamente na loja ou no&nbsp;
          <a href='http://cutipol.pt/listas/listas.php'
            target='_blank'
            rel="noopener noreferrer"
          >site:</a>
        </p>
        <ol>
          <li>Username: <em>cbmcrc</em></li>
          <li>Password: <em>210919</em></li>
        </ol>
      </div>
    )
  }

  renderPreco() {
    return(
      <div>
        <div>
          <p>
            {parseInt(this.props.description) > 0 &&
              this.props.text + ' - €' + this.props.description}
          </p>
          <p>
            Para oferecer ou contribuir para este presente, transferir o montante desejado para:
          </p>
          <p>
            <strong>Nome:</strong> Manuel Costa Reis<br />
            <strong>IBAN:</strong> PT50 0010 0000 5228 5020 0018 1
          </p>
          <p>
          Indique abaixo o que oferece para podermos agradecer!
          </p>
        </div>
        <PresentForm
          present={this.props.text}
          closeModal={this.closeModal}
        />
      </div>
    )
  }

  selectRender() {
    if (this.props.description === 'cutipol') {
      return this.renderCutipol()
    } else if (this.props.description === 'oferecido') {
      return this.renderOferecido()
    } else {
      return this.renderPreco()
    }
  }

  renderOferecido() {
    return(
      <div>
        <p>
          Este presente já foi oferecido!
        </p>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className='list-item' onClick={this.openModal}>
          <img className='list-image' src={this.props.image} alt='nós' />
          <div className='list-text'>
            {this.props.text}
            {this.props.description === 'oferecido' && " - oferecido" }
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

          {this.selectRender()}
        </Modal>
      </>
    )
  }
}

export default ListItem
