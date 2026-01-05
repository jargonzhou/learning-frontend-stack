import classNames from 'classnames';
import './Button.css';

/**
 * Button component
 * @param {*} props href, className, onClick...
 * @returns `<a/>` if props contains href, otherwise `<button/>`
 */
export const Button = (props) =>
  props.href
    ? (
      <a {...props} className={classNames('Button', props.className)}>
        {props.children}
      </a>
    )
    : (
      <button {...props} className={classNames('Button', props.className)} />
    );
