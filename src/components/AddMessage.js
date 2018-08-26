import React, { Component}  from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    let input 
    return (
      <section id="new-message">
        <textarea
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.props.dispatch(this.inputRef.current.value, 'Me')
              // reset the value to an empty string after dispatch
              this.inputRef.current.value = ''
            }
          }} 
          type="text" 
          // check ref
          ref={this.inputRef}
          ></textarea>
      </section>
    )
  }
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage