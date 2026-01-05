# React: Up & Running, 2nd Edition

version in book: 17.

action: [ex-vite-upandrunning](./ex-vite-upandrunning/README.md)

# 1. Hello World
- Setup
- Hello React World: `ReactDOM`, `React`
- What Just Happened?
- `React.createElement()`
- JSX
  - Setup **Babel**
  - Hello JSX World
  - On Transpilation
- Next: Custom Components

# 2. The Life of a Component
- A Custom Function Component/函数组件 `function() {}`
  - A JSX Version
- A Custom Class Component/类组件: `extends React.Component`
  - Which Syntax to Use?
- Properties/属性
  - Properties in Function Components
  - Default Properties
- State/状态
- A textarea Component
- Make It Stateful
- A Note on DOM Events
  - Event Handling in the Olden Days
  - Event Handling in React
  - Event-Handling Syntax
- Props Versus State
- Props in Initial State: an Antipattern
- Accessing the Component from the Outside: `ReactDOM.findDOMNode()`
- Lifecycle Methods/生命周期方法
  - mounting, updating, unmounting
  - rendering phase, commit phase
- Lifecycle Example: Log It All
  - Paranoid State Protection
- Lifecycle Example: Using a Child Component
- Performance Win: Prevent Component Updates
- Whatever Happened to Function Components?: hooks

# 3. Excel: A Fancy Table Component
- Data First
- Table Headers Loop
- Table Headers Loop, a Terse Version
- Debugging the Console Warning
- Adding `<td>` Content
  - Prop Types/属性类型
  - Can You Improve the Component?
- Sorting
  - Can You Improve the Component?
- Sorting UI Cues
- Editing Data
  - Editable Cell
  - Input Field Cell
  - Saving
  - Conclusion and Virtual DOM Diffs
- Search
  - State and UI
  - Filtering Content
  - Update the save() Method
  - Can You Improve the Search?
- Instant Replay
  - Cleaning Up Event Handlers
  - Cleaning Solution
  - Can You Improve the Replay?
  - An Alternative Implementation?
- Download the Table Data
- Fetching Data

# 4. Functional Excel
- A Quick Refresher: Function versus Class Components
- Rendering the Data
- The State Hook/状态钩子: `React.useState()`
- Sorting the Table
- Editing Data
- Searching
- Lifecycles in a World of Hooks/生命周期钩子
  - Troubles with Lifecycle Methods
  - `useEffect()`
  - Cleaning Up Side Effects
  - Trouble-Free Lifecycles
  - `useLayoutEffect()`
- A Custom Hook
- Wrapping up the Replay
- `useReducer`
  - Reducer Functions/规约函数
  - Actions
  - An Example Reducer
  - Unit Testing Reducers
- Excel Component with a Reducer

# 5. JSX
- A Couple Tools
- Whitespace in JSX: `{' '}`
- Comments in JSX: `/* comment */`, `// comment`
- HTML Entities
  - Anti-XSS
- Spread Attributes: spread opreator `...`
  - Parent-to-Child Spread Attributes: `props.children`
- Returning Multiple Nodes in JSX
  - A Wrapper
  - A Fragment: `<React.Fragment></React.Fragment>`, `<></>`
  - An Array: `[]`
- Differences Between JSX and HTML
  - No `class`, What `for`?: `className`, `htmlFor`
  - `style` Is an Object
  - Closing Tags
  - camelCase Attributes
- Namespaced Components
- JSX and Forms
  - `onChange` Handler
  - `value` Versus `defaultValue`: `event.target.value`, `event.target.defaultValue`
  - `<textarea>` Value: `defaultValue`
  - `<select>` Value: `defaultValue`, `event.target.selectedOptions`
  - Controlled and Uncontrolled Components
    - a component is controlled when set `value` property of text inputs, textareas, selects, or `checked` property of radio inputs and checkboxes.

# 6. Setting Up for App Development
- Create React App
  - Node.js
  - Hello CRA(Create React App)
  - Build and Deploy
  - Mistakes Were Made
- package.json and node_modules
- Poking Around the Code
  - Indices
  - JavaScript: Modernized
  - CSS
- Moving On

# 7. Building the App’s Components
- Setup
- Start Coding
- Refactoring the `Excel` Component
- Version 0.0.1 of the New App: `src\components\whinepad\index.jsx`
- CSS
  - one CSS file per component: `className=<component-name>`
- Local Storage: `localStorage`
- The Components
  - `Discovery`: list all components
- `Logo` and a `Body`
  - Logo
  - Body
  - Discoverable
- `<Button>` Component
  - Button.js
  - `classnames` Package
- Forms
  - `<Suggest>`
  - `<Rating>` Component
  - A `<FormInput>` “Factory”
  - `<Form>`
- `<Actions>`
- Dialogs: `Dialog`
- `Header`
- App Config: `schema`
- `<Excel>`: New and Improved
  - The Overall Structure
  - Rendering
  - `React.Strict` and Reducers: React call reducer twice in strict mode.
  - Excel’s Little Helpers

# 8. The Finished App
- Updated App.js
- DataFlow Component
  - DataFlow Body
- Job Done
  - Whinepad v2
- Context
  - alternative to global storage
  - `React.createContext()`
- Next Steps
  - Circular Data
- Providing Context: `<.Provider>`
- Consuming Context: `React.useContext()`
  - Context in the Header
  - Context in the Data Table
- Updating Discovery
- Routing
  - Route Context
  - Using the Filter URL
  - Consuming the Route Context in the Header
  - Consuming the Route Context in the Data Table
  - `useCallback()`: memoize a callback function with its dependencies
- The End


