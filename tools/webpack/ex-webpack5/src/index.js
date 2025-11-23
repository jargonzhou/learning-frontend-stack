import _ from 'lodash';
import {hello} from './hello'

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');

  // call functions in another module 'hello.js'
  console.log(hello())

  return element;
}

document.body.appendChild(component());