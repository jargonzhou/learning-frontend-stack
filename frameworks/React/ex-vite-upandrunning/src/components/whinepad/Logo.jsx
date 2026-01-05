import logo from '../../assets/whinepad-logo.svg';

/**
 * @returns Logo component
 */
export const Logo = () => {
  return <img src={logo} width="300" alt="Whinepad logo" />;
};

/**
 * 
 * @param {*} src image source
 * @param {*} alt extual replacement for the image
 * @param {*} style image CSS style
 * @returns Img component
 */
export function Img({ src, alt, style }) {
  return <img src={src} width="300" alt={alt} style={style} />
}