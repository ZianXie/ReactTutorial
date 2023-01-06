import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import books from "./books.js";
import OneBook from "./Book.js";

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                // provide id
                // return <Book key={book.id} book={book}></Book>; //for each book object, pass it to the book prop, return Book component.
                return <OneBook key={book.id} {...book}></OneBook>;
            })}
        </section>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
