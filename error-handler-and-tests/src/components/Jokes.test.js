import { cleanup, render, screen } from "@testing-library/react";
import Jokes from "./Jokes.js";

const fakeJoke = {
    icon_url: undefined,
    value: "Chuck Norris moked joke",
};

afterEach(cleanup);
beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeJoke),
        })
    );
});

test("Show fetching joke", async () => {
    // global.fetch = jest.fn(() => {
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeJoke),
    //     });
    // });
    render(<Jokes />);
    const element = await screen.findByText(fakeJoke.value);
    expect(element).toBeInTheDocument();
});
