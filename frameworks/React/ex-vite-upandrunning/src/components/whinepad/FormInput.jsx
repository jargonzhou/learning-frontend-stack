import { Rating } from './Rating';
import { Suggest } from './Suggest';

/**
 * FormInput: component factory.
 * @param {*} type type of input: input(default), year, suggest, rating, textarea
 * @param {*} defaultValue default value of input
 * @param {*} options options of 'suggest'
 * @param {*} rest other props
 * @returns 
 * @see Suggest
 * @see Rating
 */
export function FormInput({ type = 'input', defaultValue = '', options = [], ...rest }) {
  switch (type) {
    case 'year':
      return (
        <input
          {...rest}
          type="number"
          defaultValue={
            (defaultValue && parseInt(defaultValue, 10)) ||
            new Date().getFullYear()
          }
        />
      );
    case 'suggest':
      return (
        <Suggest defaultValue={defaultValue} options={options} {...rest} />
      );
    case 'rating':
      return (
        <Rating
          {...rest}
          defaultValue={defaultValue ? parseInt(defaultValue, 10) : 0}
        />
      );
    case 'textarea':
      return <textarea defaultValue={defaultValue} {...rest} />;
    default:
      return <input defaultValue={defaultValue} type="text" {...rest} />;
  }
}