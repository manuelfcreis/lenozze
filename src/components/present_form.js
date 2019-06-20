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
  }

  handleChange(value, event) {
    this.setState({[value]: event.target.value})
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
            rows='10'
            className='form-input'
            name='message'
            onChange={this.handleChange.bind(this, 'message')}
            value={this.state.message}
          />
        </label>
        <input className='form-submit' type="submit" value="Submit" />
      </form>
    )
  }
}

export default PresentForm
