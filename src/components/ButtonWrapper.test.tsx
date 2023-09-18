import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "./ButtonWrapper";

describe("ButtonWrapper", () => {
  const mockOnClick = jest.fn();
  it("renders Button title", () => {
    render(
      <ButtonWrapper title="Submit" disabled={false} onClick={mockOnClick} />
    );
    const button = screen.getByText(/Submit/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
