import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("ButtonWrapper", () => {
  it("renders Button title", () => {
    render(
      <Counter  />
    );
    const button = screen.getByText(/Add one/i);
    fireEvent.click(button);
    const info = screen.getByRole("contentinfo");
    expect(info).toHaveTextContent("Count = 1");
  });
});
