import { useContext, useRef, useState } from 'react';

import searchImg from '../../assets/search.svg';

import { Logo, Img } from './Logo';
import './Header.css';

import { Button } from './Button';
import { FormInput } from './FormInput';
import { Form } from './Form.jsx';
import { Dialog } from './Dialog.jsx';

import { schema } from './data.js';
import { DataContext } from './context/DataContext';
import { RouteContext } from './context/RouteContext.js';

/**
 * @param {*} onSearch search onChange handler
 * @param {*} onAdd add onClick handler
 * @param {*} count
 * @returns Header component
 */
export function Header({ onSearch
  // , onAdd
  // , count = 0 
}) {

  // context
  const { data, updateData } = useContext(DataContext)
  const { route, updateRoute } = useContext(RouteContext)
  // state
  const [addNew, setAddNew] = useState(false)
  // ref
  const form = useRef(null)

  const count = data.length
  const placeholder = count > 1 ? `Search ${count} items` : 'Search';

  function saveNew(action) { // 
    setAddNew(false)
    updateRoute()
    if (action === 'dismiss') {
      return;
    }

    const formData = {};
    Array.from(form.current).forEach(
      (input) => (formData[input.id] = input.value),
    );
    data.unshift(formData)
    updateData(data)
  }

  function onAdd() {
    setAddNew(true)
    updateRoute('add')
  }

  return (
    <div className="Header" style={{ alignItems: 'center' }}>
      {/* logo */}
      <Logo />
      {/* search */}
      <div style={{ display: 'flex' }}>
        <Img src={searchImg} alt='Search' style={{ width: '18px', marginRight: '5px' }} />
        <FormInput placeholder={placeholder} id="search" onChange={onSearch}
          defaultValue={route.filter} />
      </div>
      {/* add */}
      <div>
        <Button onClick={onAdd}>
          <b>&#65291;</b> Add whine
        </Button>
      </div>
      {
        addNew ? (
          <Dialog
            modal={true}
            header="Add new item"
            confirmLabel="Add"
            onAction={(action) => saveNew(action)}>
            <Form ref={form} fields={schema} />
          </Dialog>
        ) : null
      }
    </div >
  );
}