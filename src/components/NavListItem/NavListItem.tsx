import React from "react";
import { ListItemButton, ListItemDecorator } from "@mui/joy";
import { Template } from "../../types/editor";

interface NavListItemProps {
  item: Template;
  onClick: (content: string) => void;
}

const NavListItem: React.FC<NavListItemProps> = ({ item, onClick }) => {
  return (
    <ListItemButton onClick={() => onClick(item.content)}>
      <ListItemDecorator>
        <item.IconComponent />
      </ListItemDecorator>
      {item.text}
    </ListItemButton>
  );
};

export default React.memo(NavListItem);
