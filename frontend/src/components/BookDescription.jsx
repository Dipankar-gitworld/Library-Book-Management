import "./BookDescription.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function BookDescription(){
    let [singleBook, setSingleBook] = useState({})

    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/books/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setSingleBook(data);
        })

    },[id])

    
    return (
        <div>
            
            <div className="bookDescription-div">
                <div>
                    <img src={singleBook.thumbnailUrl} alt="book cover pic" />
                </div>
                <div>
                    <h1>{singleBook.title}</h1>
                    
                    <p>Authors: {singleBook.authors?singleBook.authors.join(" ,  "):null}</p>
                    <p>Year: {new Date(singleBook.publishedDate).getFullYear()}</p>
                    <h3>Description</h3>
                    <p>{singleBook.longDescription}</p>
                </div>
                
            </div>

        </div>
    )
}

export default BookDescription;