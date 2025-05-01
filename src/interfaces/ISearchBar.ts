import { ChangeEvent } from "react";

export interface ISearchBar {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};
