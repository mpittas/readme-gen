import {
  InsertLink,
  CloudCircle,
  BorderColor,
  Person,
  Label,
  ColorLens,
  VolunteerActivism,
  OndemandVideo,
  RocketLaunch,
  Article,
  BuildCircle,
  Help,
  RateReview,
  GitHub,
  Build,
  AutoStories,
  Stars,
  BubbleChart,
  AutoAwesome,
  Moving,
  Group,
  EditRoad,
  Devices,
  ScreenshotMonitor,
  Support,
  HomeRepairService,
  BugReport,
  Preview,
  List,
} from "@mui/icons-material"

// Define the type for each item
export interface ListItem {
  text: string
  IconComponent: React.ElementType
}

// Array of items
export const listItems: ListItem[] = [
  {
    text: "Aknowledgements",
    IconComponent: InsertLink,
  },
  {
    text: "API Reference",
    IconComponent: CloudCircle,
  },
  {
    text: "Appendix",
    IconComponent: BorderColor,
  },
  {
    text: "Author",
    IconComponent: Person,
  },
  {
    text: "Badges",
    IconComponent: Label,
  },
  {
    text: "Color Reference",
    IconComponent: ColorLens,
  },
  {
    text: "Contributing",
    IconComponent: VolunteerActivism,
  },
  {
    text: "Demo",
    IconComponent: OndemandVideo,
  },
  {
    text: "Deployment",
    IconComponent: RocketLaunch,
  },
  {
    text: "Documentation",
    IconComponent: Article,
  },
  {
    text: "Environment Variables",
    IconComponent: BuildCircle,
  },
  {
    text: "FAQ",
    IconComponent: Help,
  },
  {
    text: "Features",
    IconComponent: AutoAwesome,
  },
  {
    text: "Feedback",
    IconComponent: RateReview,
  },
  {
    text: "Github Profile - About me",
    IconComponent: GitHub,
  },
  {
    text: "Github Profile - Introduction",
    IconComponent: GitHub,
  },
  {
    text: "Github Profile - Links",
    IconComponent: GitHub,
  },
  {
    text: "Github Profile - Others",
    IconComponent: GitHub,
  },
  {
    text: "Installation",
    IconComponent: Build,
  },
  {
    text: "Lessons",
    IconComponent: AutoStories,
  },
  {
    text: "License",
    IconComponent: Stars,
  },
  {
    text: "Logo",
    IconComponent: BubbleChart,
  },
  {
    text: "Optimization",
    IconComponent: Moving,
  },
  {
    text: "Related",
    IconComponent: Group,
  },
  {
    text: "Roadmap",
    IconComponent: EditRoad,
  },
  {
    text: "Run Locally",
    IconComponent: Devices,
  },
  {
    text: "Screenshots",
    IconComponent: ScreenshotMonitor,
  },
  {
    text: "Support",
    IconComponent: Support,
  },
  {
    text: "Tech",
    IconComponent: HomeRepairService,
  },
  {
    text: "Running Tests",
    IconComponent: BugReport,
  },
  {
    text: "Usage/Examples",
    IconComponent: Preview,
  },
  {
    text: "Used by",
    IconComponent: List,
  },
]
