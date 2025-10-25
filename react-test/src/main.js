import { createElement, Fragment } from "react"
import { createRoot } from "react-dom/client"

const app = document.getElementById('app')
const title = createElement('h1', { "key": 'titulo', "className": 'title'}, 'Hola from React!')
const subTitle = createElement('h2', { "key": 'subtitulo', "className": 'subtitle'}, 'Frutas')
const fruit = createElement('li', { "key": 123 }, 'Manzanas')
const fruit1 = createElement('li', { "key": 321 }, 'Peras')
const fruit2 = createElement('li', { "key": 456 }, 'Fresas')

const fruitsList = createElement('ol', { "className": 'containerList'}, [fruit, fruit1, fruit2])


const container = createElement(Fragment, { "className": 'container'}, [title, subTitle, fruitsList])

const root = createRoot(app)
root.render(container)