import './style/index.scss'

import WinButton from './components/button.vue'
import WinCheckbox from './components/checkbox.vue'

import type { App, Plugin } from 'vue'

const components = [
    WinButton,
    WinCheckbox
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
    WinCheckbox
}