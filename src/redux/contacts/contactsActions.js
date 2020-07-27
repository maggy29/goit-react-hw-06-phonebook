import { createAction } from "@reduxjs/toolkit";
import { uuidv4 } from "uuidv4";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));
const removeContact = createAction("contacts/remove");
const filterContacts = createAction("contacts/filter");

export default {
  addContact,
  removeContact,
  filterContacts,
};
