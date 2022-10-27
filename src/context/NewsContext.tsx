import { createContext } from "react";
import { Hit } from "../interfaces/StoryResponse";


interface ContextProps{
    isLoading: boolean;
    hits: Hit[];
    query: string;
    page: number;
    nbPages: number;

    //Methods
    handleRemove: (id: string) => void;
    handleSearch: (e: any) => void;
    handlePage: (value: string) => void;
};


export const NewsContext = createContext( {} as ContextProps);