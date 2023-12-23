"use client"
import React, { useState } from "react"
import { Box, List, ListItemDecorator, ListItemButton, Input } from "@mui/joy"
import { listItems } from "./listItems"
import CloseIcon from "@mui/icons-material/Close"

interface Item {
  text: string
  IconComponent: React.ElementType
}

export default function NavList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeItems, setActiveItems] = useState<Item[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<Item | null>(null)
  const filteredItems = listItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <List sx={{ gap: 1 }}>
        <h2>Active state</h2>
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
                if (selectedTemplate === activeItem) {
                  setSelectedTemplate(null)
                }
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
                setSelectedTemplate(item)
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
