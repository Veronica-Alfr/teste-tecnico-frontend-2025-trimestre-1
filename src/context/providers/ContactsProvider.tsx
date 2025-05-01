import { useEffect, useState } from "react";
import { fetchAddressByCep } from "../../api/requests";
import { IContact } from "../../interfaces/IContact";
import { ContactsContext } from "../createContext";
import { IContactsProviderPros } from "../../interfaces/IContactsProviderPros";
import { toast } from "react-toastify";

export const ContactsProvider: React.FC<IContactsProviderPros> = ({ children }) => {
    const [contacts, setContacts] = useState<IContact[]>(() => {
      const stored = localStorage.getItem('contacts');
      return stored ? JSON.parse(stored) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = async (username: string, displayName: string, cep: string): Promise<void> => {
      try {
        const address = await fetchAddressByCep(cep);
        const newContact: IContact = {
          id: Date.now().toString(),
          username,
          displayName,
          address,
        };
        setContacts(prev => [...prev, newContact]);
        toast.success("Contato adicionado com sucesso!");
      } catch (error) {
        toast.error("Erro ao adicionar contato.");
      }
    };

    const updateContact = (id: string, updatedDisplayName: string) => {
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...contact, displayName: updatedDisplayName } : contact // O que sigfica retornar só contact?
        )
      );
    };
  
    const deleteContact = (id: string) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    };  

    return (
      <ContactsContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
        {children}
      </ContactsContext.Provider>
    );
};
