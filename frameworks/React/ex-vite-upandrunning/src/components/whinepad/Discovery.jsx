import { useRef, useState } from 'react';
import './Discovery.css';
import { Logo } from './Logo.jsx';
import { Header } from './Header.jsx';
import { Body } from './Body.jsx';
import { Button } from './Button.jsx';
import { Rating } from './Rating.jsx';
import { Suggest } from './Suggest.jsx';
import { FormInput } from './FormInput.jsx';
import { Form } from './Form.jsx';
import { Actions } from './Actions.jsx';
import { Dialog } from './Dialog.jsx';
import { Excel } from './Excel.jsx';

import { schema } from './data.js';
import { DataContext } from './context/DataContext.js';

/**
 * @returns Dialog component for message or pop-ups
 */
function DialogExample() {
  const [example, setExample] = useState(null);
  return (
    <>
      <p>
        <Button onClick={() => setExample(1)}>Example 1</Button>{' '}
        <Button onClick={() => setExample(2)}>Example 2</Button>
      </p>
      {example === 1 ? (
        <Dialog
          modal
          header="Out-of-the-box example"
          onAction={(type) => {
            alert(type);
            setExample(null);
          }}>
          Hello, dialog!
        </Dialog>
      ) : null}

      {example === 2 ? (
        <Dialog
          header="Not modal, custom dismiss button"
          hasCancel={false}
          confirmLabel="Whatever"
          onAction={(type) => {
            alert(type);
            setExample(null);
          }}>
          Anything goes here, like a <Button>a button</Button> for example
        </Dialog>
      ) : null}
    </>
  );
}

function ExcelExample() {
  const initialData = schema.name.samples.map((_, idx) => {
    const element = {}
    for (let key in schema) {
      element[key] = schema[key].samples[idx]
    }
    return element
  })
  const [data, setData] = useState(initialData)

  function updateData(newData) {
    setData(newData)
  }

  return (
    <DataContext.Provider value={{ data, updateData }}>
      <Excel />
    </DataContext.Provider>
  )
}

/**
 * List all components.
 * 
 * @returns discovery component
 */
export function Discovery() {
  // hook: useRef(), create ref object
  const form = useRef();

  return (
    <div className="Discovery">
      <h2>1. Logo</h2>
      <div style={{ background: '#f6f6f6', display: 'inline-block' }}>
        <Logo />
      </div>

      <h2>2. Header</h2>
      <DataContext.Provider value={{ data: [1, 2, 3, 4], updateData: () => { } }}>
        <Header
          onSearch={(e) => console.log(e)} // SyntheticBaseEvent
        // onAdd={() => alert('add')}
        // count={3}
        />
      </DataContext.Provider>

      <h2>3. Body</h2>
      <Body>I am content inside the body</Body>

      <h2>4. Buttons</h2>
      <p>
        Button with onClick:{' '}
        <Button onClick={() => alert('ouch')}>Click me</Button>
      </p>
      <p>
        A link: <Button href="https://reactjs.org/">Follow me</Button>
      </p>
      <p>
        Custom class name:{' '}
        <Button className="Discovery-custom-button">I do nothing</Button>
      </p>

      <h2>5. Rating</h2>
      <p>
        No initial value: <Rating />
      </p>
      <p>
        Initial value 4: <Rating defaultValue={4} />
      </p>
      <p>
        This one goes to 11: <Rating max={11} />
      </p>
      <p>
        Read-only: <Rating readonly={true} defaultValue={3} />
      </p>

      <h2>6. Suggest</h2>
      <p>
        <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
      </p>

      <h2>7. Form inputs</h2>
      <table className="Discovery-pad">
        <tbody>
          <tr>
            <td>Vanilla input</td>
            <td>
              <FormInput />
            </td>
          </tr>
          <tr>
            <td>Prefilled</td>
            <td>
              <FormInput defaultValue="with a default" />
            </td>
          </tr>
          <tr>
            <td>Year</td>
            <td>
              <FormInput type="year" />
            </td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <FormInput type="rating" defaultValue={4} />
            </td>
          </tr>
          <tr>
            <td>Suggest</td>
            <td>
              <FormInput
                type="suggest"
                options={['red', 'green', 'blue']}
                defaultValue="green"
              />
            </td>
          </tr>
          <tr>
            <td>Vanilla textarea</td>
            <td>
              <FormInput type="textarea" />
            </td>
          </tr>
        </tbody>
      </table>

      <h2>8.1 Form</h2>
      <div className="Discovery-pad Discovery-narrow">
        <Form
          ref={form} // pass ref object
          fields={{
            rateme: { label: 'Rating', type: 'rating' },
            freetext: { label: 'Greetings' },
          }}
          initialData={{ rateme: 4, freetext: 'Hello' }}
        />
        <p>
          <Button
            onClick={() => {
              const data = {};
              // ref.current: access the form DOM element
              Array.from(form.current).forEach(
                (input) => (data[input.id] = input.value),
              );
              alert(JSON.stringify(data));
            }}>
            Submit
          </Button>
        </p>
      </div>

      <h3>8.2 Readonly form</h3>
      <div className="Discovery-pad">
        <Form
          fields={{
            rateme: { label: 'Rating', type: 'rating' },
            freetext: { label: 'Greetings' },
          }}
          initialData={{ rateme: 4, freetext: 'Hello' }}
          readonly
        />
      </div>

      <h2>9. Actions</h2>
      <p>
        <Actions onAction={(type) => alert(type)} />
      </p>

      <h2>10. Dialog</h2>
      <DialogExample />

      <h2>11. Excel</h2>
      {/* <Excel
        schema={schema}
        initialData={schema.name.samples.map((_, idx) => {
          const element = {};
          for (let key in schema) {
            element[key] = schema[key].samples[idx];
          }
          return element;
        })}
        onDataChange={(data) => {
          console.log(data);
        }}
      // filter='z'
      /> */}
      <ExcelExample />
    </div >
  );
}