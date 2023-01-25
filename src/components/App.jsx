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
    filter: '',
  };

  //! (addContact)
  formSubmitHandler = ({ name, number }) => {
    if (this.isDublicateContact(name)) {
      return alert(`${name} is already in the contacts`);
    }

    this.setState(prevState => {
      const { contacts } = prevState; //! тут можемо використати prevState, т.як всередині
      // const { contacts } = this.state; //! Або такий запис, тобто тут prevState === this.state
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      return { contacts: [newContact, ...contacts] };
    });
  };
  //! Функція перевірка імені перед додаванням з урахуванням регистру
  isDublicateContact(name) {
    const normalizeName = name.toLowerCase();
    const { contacts } = this.state;
    const contactCheck = contacts.find(contact => {
      return contact.name.toLowerCase() === normalizeName;
    });

    return Boolean(contactCheck);
  }

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  filterContactByName = () => {
    const { filter, contacts } = this.state;

    //! якщо фільтр пустий, то відразу показуємо контакти
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const contacts = this.filterContactByName();
    const contactItems = contacts.map(({ id, name, number }) => (
      <Li key={id}>
        {name}: {number}
        <Button onClick={() => this.removeContact(id)} type="button">
          Delete
        </Button>
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
            onChange={this.handleInputChange}
            placeholder="Enter a name to search for"
            name="filter"
            required
          />
        </label>

        <ol>{contactItems}</ol>
      </Container>
    );
  }
}
