import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import JokeArticke from "./JokeArticle.js";

// function wait(time) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true);
//         }, time);
//     });
//     return promise;
// }

test("Base Test Joke Article", () => {
    const expected = "Chuck Norris somthing";

    const container = document.createElement("div");
    document.body.appendChild(container);

    // const root = ReactDOM.createRoot(container);

    act(() => {
        // root.render(<JokeArticke text={expected} />);
        render(<JokeArticke text={expected} />, container);
    });

    // await wait(200);
    const actual = document.querySelector(".joke-text").textContent;
    expect(expected).toEqual(actual);
});

afterEach(cleanup);

test("Test using Test Library for Joke Article", () => {
    const expected = "Chuck Norris somthing";
    render(<JokeArticke text={expected} />);
    expect(screen.getByText(expected)).toBeInTheDocument();
});
