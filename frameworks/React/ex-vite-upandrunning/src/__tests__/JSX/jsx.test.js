// ========================================================
// example in 'React: Up & Running'
// ========================================================

import { describe, expect } from "@jest/globals"
import { render, fireEvent } from "@testing-library/react"
import { toHaveAttribute, toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom'

function Example1() {
  return (
    <h1 data-testid='h1'>
      {1} plus {2} is {3}
    </h1>
  )
}

function Example2() {
  return (
    <h1 data-testid='h1-2'>
      {1}
      plus
      {2}
      is
      {3}
    </h1>
  );
}

function Comments() {
  return (
    <h1 data-testid='h1'>
      {/* multiline comment */}
      {/*
        multi
        line
        comment
        */}
      {
        // single line
      }
      Hello!
    </h1>
  )
}

describe('JSX', () => {
  it('whitespace', () => {
    const rr = render(<Example1 />)
    expect(rr.getByTestId('h1')).toHaveTextContent('1 plus 2 is 3')

    const rr2 = render(<Example2 />)
    expect(rr2.getByTestId('h1-2')).toHaveTextContent('1plus2is3')
  })

  it('comments', () => {
    const rr = render(<Comments />)
    expect(rr.getByTestId('h1')).toHaveTextContent('Hello!')
  })

  it('HTML entities', () => {
    const rr = render(<h1 data-testid='h1'>More info &raquo;</h1>)
    expect(rr.getByTestId('h1')).toHaveTextContent('More info »')

    rr.rerender(<h1 data-testid='h1'>{"More info &raquo;"}</h1>)
    expect(rr.getByTestId('h1')).toHaveTextContent('More info &raquo;')

    const RAQUO = ' \u00bb';
    rr.rerender(<h1 data-testid='h1'>{"More info" + RAQUO}</h1>)
    expect(rr.getByTestId('h1')).toHaveTextContent('More info »')
  })

  it('anti-XSS', () => {
    const firstname = 'John<scr' + 'ipt src="https://evil/co.js"></scr' + 'ipt>'
    const rr = render(<h2 data-testid='h2'>Hello {firstname}!</h2>)
    expect(rr.getByTestId('h2')).toHaveTextContent('Hello John<script src="https://evil/co.js"></script>!')
  })

  it('spread attributes', () => {
    const attr = {
      href: 'https://example.org',
      target: '_blank',
    };
    const rr = render(<a {...attr}>Hello</a>)
    expect(rr.container.children[0]).toContainHTML('<a href="https://example.org" target="_blank">Hello</a>')

    // parent to child
    function FancyLink(props) {
      const { variant, ...attribs } = props
      const classes = ['link-core']
      switch (props.variant) {
        case 'small':
          classes.push('link-small');
          break;
        case 'huge':
          classes.push('link-huge');
          break;
        default:
          classes.push('link-default');
      }

      return (
        <a {...attribs} className={classes.join(' ')}>
          {props.children}
        </a>
      )
    }
    rr.rerender(<FancyLink>
      <span>Follow me</span>
    </FancyLink>)
    expect(rr.container.children[0]).toContainHTML('<a class="link-core link-default"><span>Follow me</span></a>')
  })

  it('returning multiple nodes in JSX', () => {
    const rr = render(
      <div>
        <span>Hello</span>
        {' '}
        <span>World</span>
      </div>)
    expect(rr.container.children[0]).toContainHTML('<div><span>Hello</span> <span>World</span></div>')

    // <Fragment/>, <></>
    rr.rerender(
      <>
        <span>Hello</span>
        {' '}
        <span>World</span>
      </>)
    expect(rr.container.children[0]).toContainHTML('<span>Hello</span>')
    expect(rr.container.children[1]).toContainHTML('<span>World</span>')

    // array
    const rr2 = render(
      [
        <span key="a">Hello</span>,
        ' ',
        <span key="b">World</span>,
        '!'
      ]
    )
    expect(rr2.container.children[0]).toContainHTML('<span>Hello</span>')
    expect(rr2.container.children[1]).toContainHTML('<span>World</span>')
  })

  it('class, for, style', () => {
    // className, htmlFor
    const rr = render(<em data-testid='em' className='important' />)
    expect(rr.getByTestId('em')).toHaveAttribute('class', 'important')

    rr.rerender(<label data-testid='label' htmlFor='thatInput' />)
    expect(rr.getByTestId('label')).toHaveAttribute('for', 'thatInput')

    // style is an object
    const styles = {
      fontSize: '2em',
      lineHeight: '1.6',
    };
    rr.rerender(<em data-testid='em-2' style={styles}>Valid style</em>)
    expect(rr.getByTestId('em-2')).toHaveStyle('fontSize: 2em')
  })

  // closing tags

  // camelCase attributes

  it('namespaced components', () => {
    const Library = {
      Book({ id }) {
        return `Book ${id}`
      },
      Reader({ id }) {
        return `Reader ${id}`
      }
    }

    const rr = render(<Library.Reader id={456} />)
    expect(rr.container).toContainHTML('Reader 456')
  })
})

//
// forms
//

function changeHandler(which, event) {
  console.log(
    `onChange called on the "${which}" with value "${event.target.value}" and defaultValue "${event.target.defaultValue}"`,
  );
}
// `onChange` handler
function ExampleForm() {
  return (
    <form onChange={changeHandler.bind(null, 'form')}>
      <label>
        Type here:
        <br />
        <input data-testid='input-1' type="text" defaultValue="hello" onChange={changeHandler.bind(null, 'text input')} />
      </label>
      <div>Make your pick:</div>
      <label >
        <input data-testid='input-2'
          type="radio"
          name="pick"
          value="option1"
          onChange={changeHandler.bind(null, 'radio 1')}
        />
        Option 1
      </label>
      <label data-testid='input-3'>
        <input
          type="radio"
          name="pick"
          value="option2"
          onChange={changeHandler.bind(null, 'radio 2')}
        />
        Option 2
      </label>
    </form>
  )
}

// textarea
function ExampleTextarea() {
  return (
    <form>
      <label>
        Type here:{' '}
        <textarea data-testid='ta-1'
          defaultValue={'hello\nworld'}
          // onChange={changeHandler}
          onChange={changeHandler.bind(null, 'textarea')}
        />{' '}
      </label>
    </form>
  );
}

// select
function ExampleSelect() {
  return (
    <form>
      <select data-testid='select'
        defaultValue="move"
        // onChange={changeHandler}
        onChange={changeHandler.bind(null, 'select')}
      >
        <option value="stay">Should I stay</option>
        <option value="move">or should I go</option>
      </select>
    </form>
  )
}

function selectHandler({ target }) {
  console.log(Array.from(target.selectedOptions).map((option) => option.value))
}

function ExampleMultiSelect() {
  return (
    <form>
      <select data-testid='multi-select'
        defaultValue={['stay', 'move']}
        multiple={true}
        onChange={selectHandler}>
        <option value="stay">Should I stay</option>
        <option value="move">or should I go</option>
        <option value="trouble">If I stay it will be trouble</option>
      </select>
    </form>
  )
}

// Controlled and Uncontrolled Components


describe('JSX and Forms', () => {
  const rr = render(<ExampleForm />)
  let b = fireEvent.click(rr.getByTestId('input-2'))
  console.log(b)

  b = fireEvent.change(rr.getByTestId('input-1'), { target: { value: 'input something' } })
  console.log(b)

  rr.rerender(<ExampleTextarea />)
  b = fireEvent.change(rr.getByTestId('ta-1'), { target: { value: 'input something' } })
  console.log(b)

  rr.rerender(<ExampleSelect />)
  b = fireEvent.change(rr.getByTestId('select'), { target: { value: 'move' } })
  console.log(b)

  rr.rerender(<ExampleMultiSelect />)
  b = fireEvent.change(rr.getByTestId('multi-select'), { target: { value: 'move' } })
  console.log(b)

  // controlled components: `value`, `checked`
})