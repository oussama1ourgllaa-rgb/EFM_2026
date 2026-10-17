import { createContext, useReducer } from "react";
export const MovieContext = createContext();


const initialS={movies:[], listwatch:[], favoris:[]};

export const Reducer=(state=initialS,action)=>{
    switch(action.type){
            
        case "ADD_TO_WATCHLIST":
            const movieWatched=state.movies.filter(m=>m.inWatchlist=== true);
            return {...state, listwatch:[...state.listwatch, movieWatched]};

            
        case "REMOVE_FROM_WATCHLIST":
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id)};

        case "TOGGLE_LIKE":
            return {
                ...state,
                movies: state.movies.map(movie =>
                    movie.id === action.payload.id ? { ...movie, liked: !movie.liked } : movie
                )
            };
        default:
            return state;
    }
}

export const MovieProvider=({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialS);
    return (
        <MovieContext.Provider value={{state, dispatch}}>
        {children}
        </MovieContext.Provider>
    );
}