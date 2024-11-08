import { EditorState, EditorAction } from "../types/editor";

export const initialState: EditorState = {
  isCollapsed: false,
  markdown: [],
  editorContent: "",
  activeTemplates: [],
};

export function reducer(state: EditorState, action: EditorAction) {
  switch (action.type) {
    case "SET_EDITOR_CONTENT":
      return {
        ...state,
        editorContent: action.payload,
      };
    case "TOGGLE_COLLAPSE":
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    case "UPDATE_TEMPLATES":
      return {
        ...state,
        activeTemplates: action.payload,
      };
    default:
      return state;
  }
}
