import "./Navber.css";
import Searchbar from "./Searchber";
import Login from "./Login";


function Navber(){
    return (
        <div className="nav-mainDiv">
            <div >
                <h3 style={{cursor:"pointer"}} onClick={()=>{window.location.href="/"}}>BookWorld</h3>
            </div>
            <Searchbar />
            <Login />
        </div>
    )
}


export default Navber;