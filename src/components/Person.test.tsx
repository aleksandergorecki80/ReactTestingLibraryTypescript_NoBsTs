import React from "react";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

describe("Person", () => {
  it("renders Person name", () => {
    render(<Person name="John Doe" />);
    const name = screen.getByText(/John Doe/i);
    expect(name).toBeInTheDocument();
  });
  it("renders Person name by role", () => {
    render(<Person name="John Doe" />);
    const name = screen.getByRole("contentinfo");
    expect(name).toHaveTextContent("John Doe");
  });
});
