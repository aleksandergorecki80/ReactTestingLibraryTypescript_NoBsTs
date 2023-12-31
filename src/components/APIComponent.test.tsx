import { render, screen } from "@testing-library/react";
import { APIComponent } from "./APIComponent";
import { rest } from 'msw'
import { setupServer,  } from 'msw/node'

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("APIComponent", () => {
    it("fetches the data", async () => {
        render(<APIComponent />)
        const out = await screen.findByRole("term");
    expect(out).toHaveTextContent("Name is: Jack");

    });
});
