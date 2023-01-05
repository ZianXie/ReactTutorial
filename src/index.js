import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const books = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/918hXn4Uy1L._AC_UL320_.jpg",
        title: "Where the Forest Meets the Stars and Moon",
        author: "Glendy Vanderah",
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/81pXwpRhK0L._AC_UL320_.jpg",
        title: "The Last Lieutenant (The Todd Ingram Series Book 1)",
        author: "John J. Gobbell",
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/81T2u+-6MaL._AC_UL320_.jpg",
        title: "American Dirt (Oprah's Book Club): A Novel",
        author: "Jeanine Cummins",
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/81T2u+-6MaL._AC_UL320_.jpg",
        title: "American Dirt (Oprah's Book Club): A Novel",
        author: "Jeanine Cummins",
    },
];
function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                // provide id
                // return <Book key={book.id} book={book}></Book>; //for each book object, pass it to the book prop, return Book component.
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

const Book = ({ img, title, author }) => {
    //attribute, eventHandler
    //onClick, onMouseOver

    const clickHandler = (e) => {
        // check out the event object
        console.log(e);
        console.log(e.target);
        alert("hello world");
    };

    const complexExample = (author) => {
        console.log(author);
    };

    return (
        <article
            className="book"
            onMouseOver={() => {
                console.log(title);
            }}
        >
            <img src={img} alt="" />
            <h1
                onClick={() => {
                    console.log(title);
                }}
            >
                {title}
            </h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                reference example
            </button>
            <button
                type="button"
                onClick={() => {
                    complexExample(author);
                }} //to avoid auto invocation, use ()=>{} to wrap a function with argument
            >
                more complex example
            </button>
        </article>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
