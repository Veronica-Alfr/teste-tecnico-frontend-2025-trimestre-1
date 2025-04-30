import { createContext } from "react";
import { IContactsContextValue } from "../interfaces/IContact";

export const ContactsContext = createContext<IContactsContextValue | undefined>(undefined);
