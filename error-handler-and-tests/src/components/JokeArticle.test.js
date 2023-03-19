import React from "react";
import ReactDOM from "react-dom/client";

import JokeArticke from "./JokeArticle.js";

function wait(time) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
    return promise;
}

test("Joke Article", async () => {
    const expected = "Chuck Norris somthing";

    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(<JokeArticke text={expected} />);

    await wait(200);
    const actual = document.querySelector(".joke-text").textContent;
    expect(expected).toEqual(actual);
});
