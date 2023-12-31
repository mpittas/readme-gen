import { aknowledgements } from "./aknowledgements"
import { apiReference } from "./apiReference"
import { appendix } from "./appendix"
import { author } from "./author"
import { badges } from "./badges"
import { colorReference } from "./colorReference"
import { contributing } from "./contributing"
import { demo } from "./demo"

const listItems = [
  ...aknowledgements,
  ...apiReference,
  ...appendix,
  ...author,
  ...badges,
  ...colorReference,
  ...contributing,
  ...demo,
]

export default listItems
