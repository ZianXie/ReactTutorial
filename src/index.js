import React from "react";
import ReactDOM from "react-dom";
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

const Book = ({ img, title, author } /*props*/) => {
    // console.log(props);
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="" />

            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
