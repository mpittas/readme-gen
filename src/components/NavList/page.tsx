"use client"
import React, { useState } from "react"
import {
  Typography,
  Box,
  List,
  ListItemDecorator,
  ListItemButton,
  Input,
} from "@mui/joy"
import { listItems } from "./listItems"
import CloseIcon from "@mui/icons-material/Close"

interface Item {
  text: string
  IconComponent: React.ElementType
}

interface NavListProps {
  handleClick: (item: string) => void
}

export default function NavList({ handleClick }: NavListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = listItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              display: "flex",
              alignItems: "center",
              fontSize: 14,
            }}
            onClick={() => {
              handleClick(item.content)
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemDecorator>
                <item.IconComponent />
              </ListItemDecorator>
              {item.text}
            </Box>
          </ListItemButton>
        ))}
      </List>
    </>
  )
}
