export interface EditorState {
  isCollapsed: boolean;
  markdown: string[];
  editorContent: string;
  activeTemplates: Template[];
}

export interface Template {
  id: string; // Add unique identifiers
  text: string;
  content: string;
  IconComponent: React.ComponentType;
}

export type EditorAction =
  | { type: "SET_EDITOR_CONTENT"; payload: string }
  | { type: "TOGGLE_COLLAPSE" }
  | { type: "UPDATE_TEMPLATES"; payload: Template[] };
