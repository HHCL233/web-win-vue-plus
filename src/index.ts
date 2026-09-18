import "./style/index.scss";

import WinButton from "./components/button.vue";
import WinCheckBox from "./components/checkbox.vue";
import WinToggleSwitch from "./components/toggleswitch.vue";
import WinSlider from "./components/slider.vue";
import WinTile from "./components/tile.vue";
import WinTextBox from "./components/textbox.vue";

import type { App, Plugin } from "vue";

const components = [
  WinButton,
  WinCheckBox,
  WinToggleSwitch,
  WinSlider,
  WinTile,
  WinTextBox,
];

const WebWinVuePlus: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component);
      }
    });
  },
};

export default WebWinVuePlus;

export {
  WinButton,
  WinCheckBox,
  WinToggleSwitch,
  WinSlider,
  WinTile,
  WinTextBox,
};
