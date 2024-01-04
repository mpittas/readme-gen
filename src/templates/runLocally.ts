import { BugReport } from "@mui/icons-material"

export const runLocally = [
  {
    text: "Run locally",
    IconComponent: BugReport,
    content: `
## Run Locally

Clone the project

\`\`\`bash
git clone https://link-to-project
\`\`\`

Go to the project directory

\`\`\`bash
cd my-project
\`\`\`

Install dependencies

\`\`\`bash
npm install
\`\`\`

Start the server

\`\`\`bash
npm run start
\`\`\`
`,
  },
]
