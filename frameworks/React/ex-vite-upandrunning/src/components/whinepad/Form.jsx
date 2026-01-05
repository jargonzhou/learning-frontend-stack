import { forwardRef } from 'react';
import { Rating } from './Rating';
import { FormInput } from './FormInput';
import './Form.css';

/**
 * Form component using `forwardRef((props, ref) => {})`
 * 
 * props:
 * - fields: 
 * ```
 * {
 *  field-name: {
 *    type: "input", // 
 *    id: "", // input id
 *    label: "", // input label
 *    options: [""] // auto-suggest inputs
 *  }
 * }
 * ```
 * 
 * - initialData:
 * ```
 * {
 *  field-name: value
 * }
 * ```
 * 
 * - readonly
 * 
 * ref: result of `useRef()`
 */
export const Form = forwardRef(({ fields, initialData = {}, readonly = false }, ref) => {
  return (
    <form className="Form" ref={ref}> {/* ref */}
      {Object.keys(fields).map((id) => {
        const prefilled = initialData[id];
        const { label, type, options } = fields[id];
        // read only
        if (readonly) {
          if (!prefilled) {
            return null;
          }
          return (
            <div className="FormRow" key={id}>
              <span className="FormLabel">{label}</span>
              {type === 'rating' ? (
                <Rating
                  readonly={true}
                  defaultValue={parseInt(prefilled, 10)}
                />
              ) : (
                <div>{prefilled}</div>
              )}
            </div>
          );
        }
        // otherwise
        return (
          <div className="FormRow" key={id}>
            <label className="FormLabel" htmlFor={id}>
              {label}
            </label>
            <FormInput
              id={id}
              type={type}
              options={options}
              defaultValue={prefilled}
            />
          </div>
        );
      })}
    </form>
  );
});