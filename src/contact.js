import "./contact.css";
let content = document.getElementById('content');
import background from './background1.gif';

let createForm = function () {
    let form = document.createElement('form');

    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('required', '');
    name.setAttribute('maxlength', '30');
    name.setAttribute('placeholder', 'Your Name');
    name.setAttribute('id', 'name');

    let description = document.createElement('textarea');
    description.setAttribute('rows', '5');
    // description.setAttribute('cols', '60');
    description.setAttribute('name', 'description');
    description.setAttribute('required', '');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('id', 'description');

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.textContent = 'Send';

    form.appendChild(name);
    form.appendChild(description);
    form.appendChild(submit);
    return form;
}
let createContacts = function () {
    content.style.backgroundImage = `url(${background})`;
    return createForm();
};
export default createContacts;