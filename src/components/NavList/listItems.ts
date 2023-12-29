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

interface ListItem {
  text: string
  IconComponent: React.ElementType
  content: string
}

// Array of items
export const listItems: ListItem[] = [
  {
    text: "Aknowledgements",
    IconComponent: InsertLink,
    content: `## Acknowledgements
- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)`,
  },
  {
    text: "API Reference",
    IconComponent: CloudCircle,
    content: "Content for API Reference...",
  },
  {
    text: "Appendix",
    IconComponent: BorderColor,
    content: "Content for Appendix...",
  },
  {
    text: "Author",
    IconComponent: Person,
    content: "Content for Author...",
  },
  {
    text: "Badges",
    IconComponent: Label,
    content: `
    ## Badges
    
    Add badges from somewhere like: [shields.io](https://shields.io/)
    
    [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
    [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
    [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
    
    `,
  },
  {
    text: "Color Reference",
    IconComponent: ColorLens,
    content: "Content for Color Reference...",
  },
  {
    text: "Contributing",
    IconComponent: VolunteerActivism,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Demo",
    IconComponent: OndemandVideo,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Deployment",
    IconComponent: RocketLaunch,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Documentation",
    IconComponent: Article,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Environment Variables",
    IconComponent: BuildCircle,
    content: "Content for Acknowledgements...",
  },
  {
    text: "FAQ",
    IconComponent: Help,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Features",
    IconComponent: AutoAwesome,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Feedback",
    IconComponent: RateReview,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Github Profile - About me",
    IconComponent: GitHub,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Github Profile - Introduction",
    IconComponent: GitHub,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Github Profile - Links",
    IconComponent: GitHub,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Github Profile - Others",
    IconComponent: GitHub,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Installation",
    IconComponent: Build,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Lessons",
    IconComponent: AutoStories,
    content: "Content for Acknowledgements...",
  },
  {
    text: "License",
    IconComponent: Stars,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Logo",
    IconComponent: BubbleChart,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Optimization",
    IconComponent: Moving,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Related",
    IconComponent: Group,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Roadmap",
    IconComponent: EditRoad,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Run Locally",
    IconComponent: Devices,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Screenshots",
    IconComponent: ScreenshotMonitor,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Support",
    IconComponent: Support,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Tech",
    IconComponent: HomeRepairService,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Running Tests",
    IconComponent: BugReport,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Usage/Examples",
    IconComponent: Preview,
    content: "Content for Acknowledgements...",
  },
  {
    text: "Used by",
    IconComponent: List,
    content: "Content for Acknowledgements...",
  },
]
