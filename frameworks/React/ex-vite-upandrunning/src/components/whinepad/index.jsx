import './index.css'
import { Discovery } from './Discovery.jsx';
import { DataFlow } from './DataFlow.jsx';

// import { schema } from './data.js';

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery'

// data management in <DataFlow />
//
// let data = JSON.parse(localStorage.getItem('data'))
// if (!data) {
//   data = [{}]
//   Object.keys(schema).forEach((key) => (data[0][key] = schema[key].samples[0]))
// }

/**
 * The Whinepad component.
 * 
 * - Discovery
 *  - Logo
 *  - Header
 *  - Body
 *  - Button
 *  - FormInput: input factory
 *    - Suggest
 *    - Rating
*  - Form
 * - Actions
 * - Dialog
 * - Excel
 * 
 * - DataFlow
 * 
 * @returns Whinepad component
 */
export function Whinepad() {

  if (isDiscovery) {
    return <Discovery />
  }

  // data management in <DataFlow />
  //
  // return <DataFlow schema={schema} initialData={data} />
  return <DataFlow />
}

