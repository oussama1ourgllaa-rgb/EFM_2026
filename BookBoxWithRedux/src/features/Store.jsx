import { createStore} from "redux";
import LivreReducer from "./LivreReducer";



const Store=createStore(LivreReducer);
export default Store;