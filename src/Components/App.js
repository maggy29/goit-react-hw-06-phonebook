import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import contactsActions from "../redux/contacts/contactsActions";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Layout from "./Layout/Layout";
import "react-toastify/dist/ReactToastify.css";

const App = ({ contacts, onAddContact }) => {
  const handlerAddContact = ({ name, number }) => {
    const nameAtList = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    const numberAtList = contacts.some((contact) => contact.number === number);

    if (nameAtList) {
      toast.info(`${name} is already in contacts!`);
    } else if (numberAtList) {
      toast.info(`${number} is already in contacts!`);
    } else if (!name || !number) {
      toast.info("Please, fill out the form!");
    } else {
      onAddContact(name, number);
    }
  };

  return (
    <>
      <Layout>
        <ToastContainer />
        <h1>Phonebook</h1>
        <Form addNewContact={handlerAddContact} />
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 && <h2>Contacts</h2>}
        <ContactList />
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return { contacts: state.contacts.items };
};

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
