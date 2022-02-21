import Filterbar from "./Filterbar";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


function FilterPage() {
    let [bookData, setBookData] = useState([]);
    let [page, setPage] = useState(1);
    let [totalResult, setTotalResult] = useState(0);
    let { name } = useParams();
    let [arr, setArr] = useState([]);

    console.log(name);
    useEffect(() => {
        fetch(`http://localhost:4000/books/catagory/${name}?page=${page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookData(data.books);
                setTotalResult(Math.ceil(data.totalbooks / 20));
                setArr(() => {
                    let arr1 = []
                    for (let i = 1; i <= totalResult; i++) {
                        arr1.push(i);

                    }
                    return arr1
                })


            })



    }, [page])
    useEffect(() => {


        let arr1 = []
        for (let i = 1; i <= totalResult; i++) {
            arr1.push(i);

        }
        setArr(arr1)

    }, [totalResult])


    console.log("arr", arr)



    const handleClick = (el) => {
        window.location.href = `/book/${el._id}`
    }
    const goto = (num) => {
        setPage(num);
    }
    return (
        <div>

            <Filterbar catagory={name} />
            <hr />
            <div className="showBooks-mainDiv">
                {bookData.map((el) => {
                    return (
                        <div key={el._id}>
                            <img src={el.thumbnailUrl} alt="book's cover " />
                            <h4 onClick={() => handleClick(el)} style={{ cursor: "pointer" }}>{el.title}</h4>


                        </div>
                    )
                })}

            </div>
            <div className="pages">
                <button disabled={page === 1} onClick={() => {
                    if (page !== 1)
                        setPage(page - 1)
                }}>back</button>
                {/* <button style={page === 1 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(1)}>1</button>
                <button style={page === 2 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(2)}>2</button>
                <button style={page === 3 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(3)}>3</button>
                <button style={page === 4 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(4)}>4</button>
                <button style={page === 5 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(5)}>5</button>
                <button style={page === 6 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(6)}>6</button>
                <button style={page === 7 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(7)}>7</button>
                <button style={page === 8 ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(8)}>8</button> */}
                {
                    arr.map(el=>{
                        return(<button key={el} style={page === el ? { backgroundColor: "#E4E4E4" } : { backgroundColor: "white" }} onClick={() => goto(el)}>{el}</button>)
                    })

                }


                <button disabled={page === totalResult} onClick={() => {
                    if (page !== totalResult)
                        setPage(page + 1)
                }}>next</button>

            </div>

        </div>
    )
}

export default FilterPage;