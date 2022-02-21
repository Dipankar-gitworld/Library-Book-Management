
import { useState } from "react";

const input = {
    width: "80%",
    height: "98%",
    boxSizing: "border-box",

}


function Searchbar() {
    // let [text,setText] = useState("")
    let [books, setBooks] = useState([]);
    let [flag, setFlag] = useState(false)
    let timer;
    const handleChange = (e) => {
        clearTimeout(timer);

        if (e.target.value.length !== 0) {
            setFlag(true)
            let data = {
                quary: e.target.value
            }
            data = JSON.stringify(data)


            timer = setTimeout(() => {
                fetch("http://localhost:4000/books/search", {
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setBooks(data)
                    })

            }, 3000)

        } else (
            setFlag(false)
        )

    }

    const handleClick = (el) => {
        console.log(el._id)
        window.location.href = `/book/${el._id}`
    }





    return (
        <div>
            <div className="searchbar">
                <div style={{ width: "100%", height: "100%" }}>
                    <input style={input} type="search" name="book" id="book" onChange={handleChange} />
                    <button style={{ width: "20%", height: "100%", backgroundColor: "#E4E4E4", borderLeft: "none" }}>search</button>

                </div>
                <div>
                    <div style={flag ? { display: "block" } : { display: "none" }} className="searchResultDiv">
                        {
                            books.map((el) => {
                                return (
                                    <p key={el._id} onClick={() => handleClick(el)} style={{ cursor: "pointer" }}>
                                        {el.title}

                                    </p>
                                )
                            })
                        }

                    </div>
                </div>


            </div>




        </div>
    )
}

export default Searchbar;