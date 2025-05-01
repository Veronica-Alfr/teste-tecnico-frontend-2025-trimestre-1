import { useMemo } from 'react';
import { useContacts } from '../context/hooks/useContacts';

export const useFilteredContacts = (searchTerm: string) => {
    const { contacts } = useContacts();
    const term = searchTerm.toLowerCase();

    return useMemo(() => {
        if (!term.trim()) return contacts;

        return contacts.filter(contact => {
            return (
                contact.username.toLowerCase().includes(term.toLocaleLowerCase()) ||
                contact.displayName.toLowerCase().includes(term.toLocaleLowerCase()) ||
                contact.address.city.toLowerCase().includes(term.toLocaleLowerCase()) ||
                contact.address.state.toLowerCase().includes(term.toLocaleLowerCase())
            );
        });
    }, [contacts, term]);
};
