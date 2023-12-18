// NavList.tsx
"use client"
import React, { useState, useRef, useCallback } from "react"
import { List, ListItemDecorator, ListItemButton, Input } from "@mui/joy"
import { listItems as initialListItems } from "./listItems" // Adjust the path as needed
import {
  DndProvider,
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
} from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

interface NavListProps {
  onSelectItem: (content: string, id: string) => void
}

interface ListItem {
  text: string
  content: string
  IconComponent: React.ComponentType
}

const NavList: React.FC<NavListProps> = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [listItems, setListItems] = useState<ListItem[]>(initialListItems)

  const filteredItems = listItems.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragItem = filteredItems[dragIndex]
      setListItems((prevItems) => {
        const updatedItems = [...prevItems]
        updatedItems.splice(dragIndex, 1)
        updatedItems.splice(hoverIndex, 0, dragItem)
        return updatedItems
      })
    },
    [filteredItems]
  )

  const renderItem = (item: ListItem, index: number) => {
    return (
      <DraggableListItem
        key={item.text}
        index={index}
        id={item.text}
        text={item.text}
        IconComponent={item.IconComponent}
        moveItem={moveItem}
        onSelectItem={onSelectItem}
        content={item.content}
      />
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ minHeight: 46 }}
      />
      <List sx={{ gap: 1 }}>{filteredItems.map(renderItem)}</List>
    </DndProvider>
  )
}

interface DraggableListItemProps {
  id: string
  text: string
  IconComponent: React.ComponentType
  index: number
  moveItem: (dragIndex: number, hoverIndex: number) => void
  onSelectItem: (content: string, id: string) => void
  content: string
}

const DraggableListItem: React.FC<DraggableListItemProps> = ({
  id,
  text,
  IconComponent,
  index,
  moveItem,
  onSelectItem,
  content,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: "LIST_ITEM",
    hover(item: { index: number }, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: "LIST_ITEM",
    item: { id, index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <ListItemButton
      ref={ref}
      variant="outlined"
      sx={{
        borderRadius: "sm",
        p: 1.25,
        gap: 0.2,
        fontSize: "14px",
        opacity: isDragging ? 0.5 : 1,
      }}
      onClick={() => onSelectItem(content, text)}
    >
      <ListItemDecorator>
        <IconComponent />
      </ListItemDecorator>
      {text}
    </ListItemButton>
  )
}

export default NavList
