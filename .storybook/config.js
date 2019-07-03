import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon, { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context("../src/lib/components", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

// Globally in your .storybook/config.js, or alternatively, per-chapter
// addDecorator(jsxDecorator);

configure(loadStories, module);
