import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import { Button, Container, H1, H2, Li } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  //! (addBook)
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    const contactCheck = contacts.find(contact => {
      return contact.name === newContact.name;
    });

    contactCheck
      ? alert(`${name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...contacts],
        }));
  };

  render() {
    const { contacts } = this.state;
    const contactItems = contacts.map(({ id, name, number }) => (
      <Li key={id}>
        {name}: {number}
        <Button type="button">Delete</Button>
      </Li>
    ));

    return (
      <Container>
        <H1>Phonebook</H1>
        <ContactForm onForm={this.formSubmitHandler} />
        <H2>Contacts</H2>

        <label>
          <p>Find contacts by name</p>
          <input
            type="text"
            placeholder="Введіть ім'я"
            name="filter"
            required
          />
        </label>

        <ol>{contactItems}</ol>
      </Container>
    );
  }
}
