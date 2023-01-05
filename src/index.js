import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const books = [
    {
        img: "https://m.media-amazon.com/images/I/918hXn4Uy1L._AC_UL320_.jpg",
        title: "Where the Forest Meets the Stars and Moon",
        author: "Glendy Vanderah",
    },
    {
        img: "https://m.media-amazon.com/images/I/81pXwpRhK0L._AC_UL320_.jpg",
        title: "The Last Lieutenant (The Todd Ingram Series Book 1)",
        author: "John J. Gobbell",
    },
    {
        img: "https://m.media-amazon.com/images/I/81T2u+-6MaL._AC_UL320_.jpg",
        title: "American Dirt (Oprah's Book Club): A Novel",
        author: "Jeanine Cummins",
    },
];
function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book book={book}></Book>; //for each book object, pass it to the book prop, return Book component.
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className="book">
            <img src={img} alt="" />

            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
