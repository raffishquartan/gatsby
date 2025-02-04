// This fixture is moved during the test lifecycle

import slugify from "@sindresorhus/slugify";
import helloDefaultESM from "./esm-default.mjs"
import { helloNamedESM } from "./esm-named.mjs"

helloDefaultESM()
helloNamedESM()

const config = {
  plugins: [
    {
      resolve: `a-local-plugin`,
      options: {
        slugify,
      },
    },
  ],
}

export default config