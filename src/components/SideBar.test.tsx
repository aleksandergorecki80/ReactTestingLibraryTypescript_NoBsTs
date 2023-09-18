import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

describe("Side bar", () => {
    const items = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Info",
            url: "/info"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]
  
  it("renders Side bar with content name by role", () => {
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveTextContent("Home");
  });
  it("renders Side bar link with proper href", () => {
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveAttribute("href", items[0].url);
  });
  it("renders Side bar link with proper text", () => {
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
  });
});
