import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

function Filter({ value, onFilter }) {
  return (
    <label className={styles.container}>
      Find contact by name <br />
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { value: state.contacts.filter };
};

const mapDispathToProps = {
  onFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispathToProps)(Filter);
