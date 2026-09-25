import type { App, Plugin } from "vue";
import {
  WinButton,
  WinCheckBox,
  WinToggleSwitch,
  WinSlider,
  WinTile,
  WinTextBox,
  WinToolTip,
  WinNavigationView,
  WinNavigationViewItem,
} from "./index";
import "./style/index.scss";

const components = [
  WinButton,
  WinCheckBox,
  WinToggleSwitch,
  WinSlider,
  WinTile,
  WinTextBox,
  WinToolTip,
  WinNavigationView,
  WinNavigationViewItem,
];

const WebWinVuePlus: Plugin = {
  install(app: App) {
    components.forEach((c) => {
      if (c.name) app.component(c.name, c);
    });
  },
};

export default WebWinVuePlus;
export * from "./index";
