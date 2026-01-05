
/**
 * Suggest component: auto-auggest input using `<datalist/>`
 * @param {*} id input id
 * @param {*} defaultValue input default value
 * @param {*} options datalist options
 */
export function Suggest({ id, defaultValue = '', options = [] }) {

  const randomid = Math.random().toString(16).substring(2);
  return (
    <>
      <input
        id={id}
        list={randomid}
        defaultValue={defaultValue}
      />
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist */}
      <datalist id={randomid}>
        {options.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
    </>
  );
}