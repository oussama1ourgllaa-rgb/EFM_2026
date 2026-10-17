import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LikedList from "./Components/LikedList";
import livre from "./Components/Livre";
import WashList from "./Components/WashList";
import  {Provider} from "react-redux";
import Store from "./features/Store";



const App=()=>{
  return(

 <BrowserRouter>
<Provider store={Store}>
  <Navbar/>
      <Routes>
          <Route path="/" element={<livre />}/>
           <Route path="/books" element={<livre />}/>
    
          <Route path="/watchlist" element={<WashList/>}/>
          <Route path="/likedlist" element={<LikedList/>}/>


      </Routes>
  
 
 </Provider>
 </BrowserRouter>


  )


}
export default App;