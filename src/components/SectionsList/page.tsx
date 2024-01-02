"use client";
import React, { useState } from "react";
import { List, ListItemDecorator, ListItemButton, Input } from "@mui/joy";
import listItems from "../../templates/index";

export default function NavList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = listItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ minHeight: 46 }}
      />
      <List sx={{ gap: 1 }}>
        {filteredItems.map((item, index) => (
          <ListItemButton
            variant="outlined"
            key={index}
            sx={{
              borderRadius: "sm",
              p: 1.25,
              gap: 0.2,
            }}
          >
            <ListItemDecorator>
              <item.IconComponent />
            </ListItemDecorator>
            {item.text}
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
