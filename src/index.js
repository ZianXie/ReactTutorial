import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img
        src="https://m.media-amazon.com/images/I/918hXn4Uy1L._AC_UL320_.jpg"
        alt=""
    />
);

const Title = () => <h1>Where the Forest Meets the Stars</h1>;

const Author = () => <h3>Glendy Vanderah</h3>;

// const Greeting = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "hello world")
//     );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
