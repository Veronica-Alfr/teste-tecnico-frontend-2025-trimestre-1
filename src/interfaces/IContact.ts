import { IAddress } from "./IAddress";

export interface IContact {
    id: string;
    username: string;
    displayName: string;
    address: IAddress;
};

export interface IContactsContextValue {
    contacts: IContact[];
    addContact: (username: string, displayName: string, cep: string) => Promise<void>;
};
