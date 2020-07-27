import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id }) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
