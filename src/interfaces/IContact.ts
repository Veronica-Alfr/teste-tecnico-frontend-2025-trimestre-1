import { IAddress } from "./IAddress";

export interface IContact {
    id: string;
    username: string;
    displayName: string;
    address: IAddress;
};
