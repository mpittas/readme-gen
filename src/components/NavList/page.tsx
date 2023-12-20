"use client"
import React, { useState } from "react"
import { List, ListItemDecorator, ListItemButton, Input } from "@mui/joy"
import { listItems } from "./listItems" // Adjust the path as needed
import CloseIcon from "@mui/icons-material/Close"

interface NavListProps {
  onSelectItem: (content: string, id: string) => void
}

const NavList: React.FC<NavListProps> = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const [selectedItems, setSelectedItems] = useState(
    listItems.map((item) => ({ ...item, selected: false }))
  )

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
        <div style={{ backgroundColor: "#ccc" }}>
          <h2>Active Buttons</h2>
          {selectedItems
            .filter((item) => item.selected)
            .map((item, index) => (
              <ListItemButton
                variant="outlined"
                key={index}
                onClick={() => {
                  onSelectItem(item.content, item.text)
                  setSelectedItems(
                    selectedItems.map((i) =>
                      i.text === item.text ? { ...i, selected: !i.selected } : i
                    )
                  )
                }}
                sx={{
                  borderRadius: "sm",
                  p: 1.25,
                  gap: 0.2,
                  fontSize: "14px",
                }}
              >
                <ListItemDecorator>
                  <item.IconComponent />
                </ListItemDecorator>
                {item.text}
              </ListItemButton>
            ))}
        </div>
        {selectedItems
          .filter((item) => !item.selected)
          .map((item, index) => (
            <ListItemButton
              variant="outlined"
              key={index}
              onClick={() => {
                onSelectItem(item.content, item.text)
                setSelectedItems(
                  selectedItems.map((i) =>
                    i.text === item.text ? { ...i, selected: !i.selected } : i
                  )
                )
              }}
              sx={{
                borderRadius: "sm",
                p: 1.25,
                gap: 0.2,
                fontSize: "14px",
              }}
            >
              <ListItemDecorator>
                <item.IconComponent />
              </ListItemDecorator>
              {item.text}
              {item.selected && (
                <CloseIcon
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedItems(
                      selectedItems.map((i) =>
                        i.text === item.text ? { ...i, selected: false } : i
                      )
                    )
                  }}
                />
              )}
            </ListItemButton>
          ))}
      </List>
    </>
  )
}

export default NavList
