import React from "react";

type SideBarProps = {
  items: {
    name: string;
    url: string;
  }[];
};

export const SideBar: React.FC<SideBarProps> = ({ items }) => {
  return (
    <div role="contentinfo">
      {items.map((item) => (
        <div key={item.url}>
          <a href={item.url} role="navigation">{item.name}</a>
        </div>
      ))}
    </div>
  );
};
