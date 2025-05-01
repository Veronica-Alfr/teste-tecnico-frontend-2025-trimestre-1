import { useContext } from "react";
import { IContactsContextValue } from "../../interfaces/IContact";
import { ContactsContext } from "../createContext";

export const useContacts = (): IContactsContextValue => {
  const ctx = useContext(ContactsContext);
  if (!ctx) throw new Error('useContacts must be used within ContactsProvider');
  return ctx;
};
