"use client"
import React, { useState } from "react"
import { Box, ListItemDecorator, Input } from "@mui/joy"
import listItems from "../../templates/index"

import {
  StyledList,
  StyledListItemButton,
  StyledListWrapper,
  StyledListInner,
  StyledInput,
  StyledInputWrap,
} from "./NavListStyles"

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
    <StyledListWrapper>
      <StyledInputWrap>
        <StyledInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </StyledInputWrap>

      <StyledList>
        {filteredItems.map((item, index) => (
          <StyledListItemButton
            variant="outlined"
            key={index}
            onClick={() => {
              handleClick(item.content)
            }}
          >
            <StyledListInner>
              <ListItemDecorator>
                <item.IconComponent />
              </ListItemDecorator>
              {item.text}
            </StyledListInner>
          </StyledListItemButton>
        ))}
      </StyledList>
    </StyledListWrapper>
  )
}
