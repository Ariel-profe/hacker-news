import { Hit } from "../interfaces/StoryResponse";
import { NewsState } from "./NewsProvider";

type NewsActionType =
| {type: '[NEW] Set Loading'}
| {type: '[NEW] Set Stories', payload: {hits: [], nbPages: number}}
| {type: '[NEW] Remove Storie', payload: string}
| {type: '[NEW] Handle Page', payload: string}
| {type: '[NEW] Handle Search', payload: string}

export const newsReducer = (state: NewsState, action: NewsActionType): NewsState => {

    switch (action.type) {
        case "[NEW] Set Loading":
            return {
                ...state,
                isLoading: true
            }
        
        case '[NEW] Set Stories':
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        
        case "[NEW] Remove Storie":
            return{
                ...state,
                hits: state.hits.filter( (hit:Hit) => hit.objectID !== action.payload)
            }
        
        case "[NEW] Handle Search":
            return {
                ...state,
                query: action.payload
            }

        case "[NEW] Handle Page":
            if(action.payload === 'inc'){
                let nextPage = state.page + 1;
                if(nextPage > state.nbPages -1){
                    nextPage = 0
                }
                return {
                    ...state,
                    page: nextPage
                }
            }
            if(action.payload === 'dec'){
                let prevPage = state.page - 1;
                if(prevPage < 0){
                    prevPage = state.nbPages - 1
                }
                return {
                    ...state,
                    page: prevPage
                }
            }
    
        default:
            return state;
    };
};
