import './Body.css';

/**
 * @param {*} children body contents
 * @returns Body component
 */
export const Body = ({ children }) => {
  return <div className="Body">{children}</div>;
};