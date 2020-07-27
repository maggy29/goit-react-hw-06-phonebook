import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Contact.module.css";

function Contact({ id, name, number, onRemove }) {
  return (
    <li className={styles.container} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
