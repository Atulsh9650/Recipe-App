import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import RecipeItem from "./Pages/RecipeItem"


function App() {


  return (
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receipebyid" element={<RecipeItem />} />
        </Routes>
     </BrowserRouter>
  )
}

export default App
