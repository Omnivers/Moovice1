// f7e05047484d6ec018591df8216ff84e
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favorites from "./Pages/Favorites"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Popular from "./Pages/Popular"
import Weekly from "./Pages/Weekly"
import Header from "./components/Header"
import "./App.css"
import Description from "./Pages/Description";

function App(){
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/popular' element={<Popular />} />
      <Route path='/weekly' element={<Weekly />} />
      <Route path='/movie/:id' element={<Description />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
