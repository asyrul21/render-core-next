// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import FormButton from "components/buttons/formButton/formButton"

// import style
import styles from "./form.module.scss"

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      fields: {
        name: "",
        email: "",
        message: "",
      },
    }
  }

  handleFormSubmit = (event, callback) => {
    event.preventDefault()
    callback(event)
  }

  handleChange = event => {
    event.preventDefault()
    let fields = this.state.fields
    fields[event.target.name] = event.target.value

    this.setState({
      fields,
    })
  }

  render() {
    const { field1, field2, field3, handleSubmit, className } = this.props
    // define container classes here
    const styleClasses = classnames({
      [styles.formContainer]: true,
      [`${className}`]: className,
    })

    return (
      <div className={styleClasses}>
        <form onSubmit={e => this.handleFormSubmit(e, handleSubmit)}>
          <input
            name="name"
            type="text"
            placeholder={field1}
            className={
              classnames(styles.form_input, styles.simpleForm_inputText)}
            value={this.state.fields.name || ""}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder={field2}
            className={
              classnames(styles.form_input, styles.simpleForm_inputText)}
            value={this.state.fields.email || ""}
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            placeholder={field3}
            className={
              classnames(styles.form_input, styles.simpleForm_textArea)}
            value={this.state.fields.message || ""}
            onChange={this.handleChange}
          />
          <FormButton value="Send" />
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  /*
   *
   * the placeholder for the top input */
  field1: propTypes.string,
  /*
   *
   * the placeholder for the second input */
  field2: propTypes.string,
  /*
   *
   * placeholder for the textarea input */
  field3: propTypes.string,
  /*
   *
   * function callback of handleSubmit */
  handleSubmit: propTypes.func,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default Form
