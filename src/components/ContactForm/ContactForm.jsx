import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import { Button, Form, Label, Span, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  //! Записує данні з інпуту в STATE
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //! (addBook)
  handleSubmit = e => {
    e.preventDefault();

    console.log('this.state', this.state);

    this.props.onForm(this.state);

    this.reset();
  };

  //! Додаті інші дінні для сброса форми
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            placeholder="Enter your first and second name"
            name="name"
            value={this.state.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            name="number"
            value={this.state.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
