import React, { Component, ErrorInfo, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/joy";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error);
    console.error("Error info:", errorInfo);
  }

  private handleReset = () => {
    // Clear local storage and reload the page
    localStorage.removeItem("editorContent");
    localStorage.removeItem("activeTemplates");
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography level="h4">Something went wrong</Typography>
          <Typography level="body-md">
            {this.state.error?.message || "An unexpected error occurred"}
          </Typography>
          <Button variant="solid" color="primary" onClick={this.handleReset}>
            Reset Application
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
