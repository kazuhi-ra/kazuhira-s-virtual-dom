import { h } from './vdom/h'
import { render } from './vdom/render'

const view = h('p', { attrs: {}, children: ['自作virtual-dom'] })

const app = render(view)
const el = document.querySelector('#app')
el.appendChild(app)
