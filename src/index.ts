import './style/index.scss'

import WinButton from './components/button.vue'
import WinCheckbox from './components/checkbox.vue'

import type { App } from 'vue'

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

export default {
    install
}

export {
    WinButton,
    WinCheckbox
}