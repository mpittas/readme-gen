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
  handleRemove: (item: string) => void
}

export default function NavList({ handleClick, handleRemove }: NavListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeItems, setActiveItems] = useState<Item[]>([])

  const filteredItems = listItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <List sx={{ gap: 1 }}>
        <Typography
          level="title-sm"
          color="neutral"
          sx={{ textTransform: "uppercase", mb: 1 }}
        >
          ACTIVE
        </Typography>
        {activeItems.map((activeItem, index) => (
          <ListItemButton
            variant="outlined"
            key={index}
            sx={{
              borderRadius: "sm",
              p: 1.25,
              display: "flex",
              alignItems: "center",
              fontSize: 14,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemDecorator>
                <activeItem.IconComponent />
              </ListItemDecorator>
              {activeItem.text}
            </Box>
            <CloseIcon
              onClick={(e) => {
                e.stopPropagation()
                const newActiveItems = activeItems.filter(
                  (item) => item !== activeItem
                )
                setActiveItems(newActiveItems)
                handleRemove(activeItem.text) // Call handleRemove when a button is removed
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ minHeight: 46 }}
      />

      <List sx={{ gap: 1 }}>
        {filteredItems
          .filter((item) => !activeItems.includes(item))
          .map((item, index) => (
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
                setActiveItems([...activeItems, item])
                handleClick(item.text) // Call handleClick when a button is clicked
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
