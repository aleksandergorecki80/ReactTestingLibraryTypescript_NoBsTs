import { useApi } from "./useApi";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { renderHook, waitFor } from "@testing-library/react";

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should fetch data from the API", async () => {
    // Render the hook
    const { result } = renderHook(() => useApi());

    // Wait for the API call to complete
    await waitFor(() => result.current !== undefined);

    // Assert that data has been fetched correctly
    expect(result.current).toEqual({ name: "Jack" });
});
