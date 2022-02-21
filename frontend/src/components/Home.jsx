
import ShowAllBooks from "./ShoeAllBooks";
import BookDescription from "./BookDescription";
import { Routes,Route } from "react-router-dom";
import Navber from "./Navbar";
import FilterPage from "./FilterPage";

function Home(){
    return (
        <div>
            <Navber />
            <Routes>
                <Route path="/" element={<ShowAllBooks />}></Route>
                <Route path="/book/:id" element={<BookDescription />}></Route>
                <Route path="/book/catagory/:name" element={<FilterPage />}></Route>
            </Routes>
            
            
            
        </div>
    )
}

export default Home;