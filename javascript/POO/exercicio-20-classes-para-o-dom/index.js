import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Label } from "./Label.js"
import { Input } from "./Input.js"

const el = new Component('h1', 'body', { textContent: 'Hello, world' })

console.log(el)
el.render()

el.tag = 'h3'

el.build().render()

const form = new Form('body')

const label = new Label('Name', { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name' })

form.render()
label.render()

