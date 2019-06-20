import React from 'react'
import './present_form.css'

class PresentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      present: this.props.present,
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(value, event) {
    this.setState({[value]: event.target.value})
  }

  handleClose(event) {
    event.preventDefault();
    this.props.closeModal();
  }

  render() {
    return(
      <form
        name={this.props.present}
        method="POST"
        action='/?obrigado'
        data-netlify="true"
        data-netlify-honeypot='campo-enganador'
        className='form-modal'
      >
        <p style={{display: 'none'}}>
          <label><input name="campo-enganador" /></label>
        </p>
        <input type="hidden" name="form-name" value={this.props.present} />
        <label className='form-field'>
          Nome:
          <input 
            className='form-input'
            type='text'
            name='name'
            onChange={this.handleChange.bind(this, 'name')}
            value={this.state.name}
          />
        </label>
        <label className='form-field'>
          Presente:
          <input
            type='text'
            name='present'
            className='form-input'
            disabled
            value={this.state.present}
          />
        </label>
        <label className='form-field'>
          Mensagem:
          <textarea 
            rows='3'
            className='form-input'
            name='message'
            onChange={this.handleChange.bind(this, 'message')}
            value={this.state.message}
          />
        </label>
        <button className='form-submit' type="submit">Enviar</button>
        <button 
          className='form-submit'
          type="reset"
          onClick={this.handleClose}
        >
          Fechar
        </button>
      </form>
    )
  }
}

export default PresentForm
