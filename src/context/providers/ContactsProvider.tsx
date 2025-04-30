import { useEffect, useState } from "react";
import { fetchAddressByCep } from "../../api/requests";
import { IContact } from "../../interfaces/IContact";
import { ContactsContext } from "../createContext";
import { IContactsProviderPros } from "../../interfaces/IContactsProviderPros";

export const ContactsProvider: React.FC<IContactsProviderPros> = ({ children }) => {
    const [contacts, setContacts] = useState<IContact[]>(() => {
      const stored = localStorage.getItem('contacts');
      return stored ? JSON.parse(stored) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
    const addContact = async (username: string, displayName: string, cep: string) => {
      const address = await fetchAddressByCep(cep);
      const newContact: IContact = {
        id: Date.now().toString(),
        username,
        displayName,
        address,
      };
      setContacts(prev => [...prev, newContact]);
    };
      
    return (
      <ContactsContext.Provider value={{ contacts, addContact }}>
        {children}
      </ContactsContext.Provider>
    );
};
