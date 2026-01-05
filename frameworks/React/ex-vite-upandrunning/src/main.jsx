import React from 'react'
import ReactDOM from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'

//
// components in 'React: Up & Running'
//

// import TextAreaCounter from './components/TextAreaCounter.jsx'
// import { Excel } from './components/Excel.jsx'
// import { sample_excel_headers, sample_excel_data } from './lib/data.js'
// import { ExcelF } from './components/ExcelF.jsx'
// import { ExcelFR } from './components/ExcelFR.jsx'
// import { UncontrolledForm, UncontrolledFormWithSubmit } from './components/jsx/UncontrolledForm.jsx'
// import { ControlledForm } from './components/jsx/ControlledForm.jsx'
import { Whinepad } from './components/whinepad/index.jsx'

//
// components in 'Learning React'
//

// import { Star } from './components/Icons.jsx'
// import { Checkbox } from './components/Checkbox.jsx'

// `createRoot` lets you create a root to display React components inside a browser DOM node.
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const app = ReactDOM.createRoot(document.getElementById('app'))

// ========================================================
// Hello World
// ========================================================
// ReactDOMClient.createRoot(document.getElementById('app'))
// .render(
//   React.createElement(
//     'h1', 
//     {id: 'my-heading'},
//     React.createElement('span', null, 'Hello ',
//       React.createElement('em', null, 'Wonderful'),
//     ),
//     ' React!'),
// )


// ========================================================
// Excel
// ========================================================
// class component
// app.render(
//   <React.StrictMode>
//     {/* <TextAreaCounter text='Hello, React!' /> */}
//     {/* <Excel headers={sample_excel_headers} initialData={sample_excel_data} /> */}
//     <Excel headers={sample_excel_headers} initialData={[]} />
//   </React.StrictMode>)

// function component
// root.render(
//   <React.StrictMode>
//     <ExcelFR headers={sample_excel_headers} initialData={sample_excel_data} />
//   </React.StrictMode>)


// ========================================================
// Star
// ========================================================
// app.render(
//   <React.StrictMode>
//     <Star />
//   </React.StrictMode>)

// ========================================================
// Checkbox
// ========================================================
// app.render(
//   <React.StrictMode>
//     <Checkbox />
//   </React.StrictMode>)


// ========================================================
// JSX
// ========================================================
// app.render(
//   <React.StrictMode>
//     {/* <UncontrolledForm /> */}
//     {/* <UncontrolledFormWithSubmit /> */}
//     <ControlledForm profile={{
//       firstname: 'Jessie',
//       lastname: 'Pinkman',
//       gender: 'male',
//       acceptedTOC: false,
//     }} />
//   </React.StrictMode>)

// ========================================================
// Whinepad
// ========================================================
app.render(
  <React.StrictMode>
    <Whinepad />
  </React.StrictMode>
)