import { FC, ReactElement, useEffect, useReducer } from 'react';
import { Hit, StoryResponse } from '../interfaces/StoryResponse';
import { NewsContext } from './NewsContext';
import { newsReducer } from './newsReducer';

interface Props{
    children : ReactElement;
};

export interface NewsState {
    isLoading: boolean;
    hits: Hit[];
    query: string;
    page: number;
    nbPages: number;
};

const NEWS_INITIAL_STATE:NewsState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0
};

const api_endpoint = 'https://hn.algolia.com/api/v1/search?'


export const NewsProvider:FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(newsReducer, NEWS_INITIAL_STATE);

    const fetchStories = async(url:string) => {
        dispatch({type: '[NEW] Set Loading'});
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: '[NEW] Set Stories', payload: {hits: data.hits, nbPages: data.nbPages}});
        } catch (error) {
            throw new Error('A problem has occurred');
        }
    };

    useEffect(() => {
      fetchStories(`${api_endpoint}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    const handleSearch = (query: any) => {
        dispatch({type: '[NEW] Handle Search', payload: query})
    };

    const handlePage = (value: string) => {
        dispatch({type: '[NEW] Handle Page', payload: value});
    };

    const handleRemove = (id: string) => {
        dispatch({type:'[NEW] Remove Storie', payload: id});
    };
    

    return(
        <NewsContext.Provider value={{
            ...state,

            //Methods
            handleRemove,
            handleSearch,
            handlePage
        }}>
            {children}
        </NewsContext.Provider>
    )
};