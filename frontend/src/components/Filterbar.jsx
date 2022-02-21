import { useState } from "react";


function Filterbar(props) {
    let [sortingFlag, setSortingFlag] = useState(false);
    let [filteringFlag, setFilteringFlag] = useState(false);
    return (
        <div className="filterDiv">
            <div>Books  {props.catagory===undefined?null:" /"+props.catagory}</div>
            <div className="inner-filterDiv">
                <div className="sortingDiv" onMouseEnter={() => { setSortingFlag(true) }} onMouseLeave={() => { setSortingFlag(false) }}>
                    <div >sort by publish year</div>
                    <div className="innerSortingDiv" style={sortingFlag ? { display: "block" } : { display: "none" }}>
                        <br />
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/before-year/2000"}}>before 2000</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/before-year/2005"}}>before 2005</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/before-year/2010"}}>before 2010</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/before-year/2015"}}>before 2015</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/before-year/2020"}}>before 2020</p>
                    </div>

                </div>
                <div className="sortingDiv" onMouseEnter={() => { setFilteringFlag(true) }} onMouseLeave={() => { setFilteringFlag(false) }}>
                    <div >filter by catagory</div>
                    <div className="innerSortingDiv" style={filteringFlag ? { display: "block" } : { display: "none" }}>
                        <br />
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/catagory/Java"}}>java</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/catagory/Internet"}}>internet</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/catagory/Web Development"}}>web development</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/catagory/PowerBuilder"}}>power builder</p>
                        <p style={{ cursor: "pointer" }} onClick={()=>{window.location.href = "/book/catagory/Python"}}>python</p>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Filterbar;