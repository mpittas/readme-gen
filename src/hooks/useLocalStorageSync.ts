import { useEffect } from "react";

interface StorageItems {
  editorContent: string;
  activeTemplates: any[];
}

export function useLocalStorageSync({
  editorContent,
  activeTemplates,
}: StorageItems) {
  useEffect(() => {
    localStorage.setItem("editorContent", editorContent);
    localStorage.setItem("activeTemplates", JSON.stringify(activeTemplates));
  }, [editorContent, activeTemplates]);
}
