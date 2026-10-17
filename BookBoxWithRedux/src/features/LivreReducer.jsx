
const initialState = {
 livre: [
    {
      id: 1,
      title: "Inception",
      author: "Christopher Nolan",
      year: 2010,
      genre: "Science-fiction",
      cover:
        "https://m.media-amazon.com/images/I/81gBhsxl9QL._SL1500_.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 2,
      title: "Interstellar",
      author: "hans Zimmer",
      year: 2014,
      genre: "Science-fiction",
      cover:
        "https://m.media-amazon.com/images/I/414RUFmLkNL._AC_.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 3,
      title: "The Dark Knight",
      author: "Christopher Nolan",
      year: 2008,
      genre: "Action",
      cover:
        "https://m.media-amazon.com/images/I/61l5OsOhwfL._SL1000_.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 4,
      title: "Avatar",
      author: "James Cameron",
      year: 2009,
      genre: "Aventure",
      cover:
        "https://tse2.mm.bing.net/th/id/OIP.PCTpYGSQijsO3QG3VZswLAAAAA?r=0&w=394&h=640&rs=1&pid=ImgDetMain&o=7&rm=3",
      liked: false,
      inReadingList: false,
    },
  ],
};
//reducer
const LivreReducer=(state=initialState, action)=>{
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {...state,
        movies: state.livre.map((livre) =>livre.id === action.payload? { ...livre, inWatchlist:true }: livre)};
    case "REMOVE_FROM_WATCHLIST":
      return {...state,livre: state.livre.map((livre) =>livre.id === action.payload? { ...livre, inWatchlist: false }: livre),};
    case "TOGGLE_LIKE":
      return {...state,livre: state.livre.map((livre) => livre.id === action.payload? { ...livre, liked: !livre.liked }: livre),}

    default:
      return state;
  }
}

export default LivreReducer;
