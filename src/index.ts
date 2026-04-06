import './style/index.scss'

import WinButton from './components/button.vue'
import WinCheckBox from './components/checkbox.vue'
import WinToggleSwitch from './components/toggleswitch.vue'

import type { App, Plugin } from 'vue'

const components = [
    WinButton,
    WinCheckBox,
    WinToggleSwitch
]

export function install(app: App) {
    components.forEach(component => {
        if (component.name) {
            app.component(component.name, component)
        }
    })
}

const WebWinVuePlus: Plugin = {
    install
}

export default WebWinVuePlus

export {
    WinButton,
    WinCheckBox,
    WinToggleSwitch
}