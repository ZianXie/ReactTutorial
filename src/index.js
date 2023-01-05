import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
    img: "https://m.media-amazon.com/images/I/918hXn4Uy1L._AC_UL320_.jpg",
    title: "Where the Forest Meets the Stars and Moon",
    author: "Glendy Vanderah",
};

const SecondBook = {
    img: "https://m.media-amazon.com/images/I/81pXwpRhK0L._AC_UL320_.jpg",
    title: "The Last Lieutenant (The Todd Ingram Series Book 1)",
    author: "John J. Gobbell",
};

function BookList() {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint odit aliquam voluptate neque natus quod dolore, iusto
                    rerum illo perferendis exercitationem fugit quos temporibus
                    consequuntur, debitis aperiam! Veritatis, officia
                    laboriosam?
                </p>
            </Book>
            <Book
                img={SecondBook.img}
                title={SecondBook.title}
                author={SecondBook.author}
            />
        </section>
    );
}

const Book = ({ img, title, author, children }) => {
    return (
        <article className="book">
            <img src={img} alt="" />

            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
