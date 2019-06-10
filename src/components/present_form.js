import React from 'react'
import './present_form.css'

class PresentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      present: this.props.present,
      message: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(value, event) {
    this.setState({[value]: event.target.value})
  }

  formSubmit(event) {
    event.preventDefault();

    const data = {
      "values": [
        [
          this.state.name,
          this.state.present,
          this.state.message
        ]
      ]
    }

    console.log(data)

    this.setState({submitted: true})
  }

  render() {
    if (this.state.submitted) {
      return(
        <div>
          <p>
            Obrigado pela ajuda or something!
          </p>
        </div>
      )
    } else {
      return(
        <form onSubmit={this.formSubmit}>
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
}

export default PresentForm
// Name
// Presente
// Mensagem
