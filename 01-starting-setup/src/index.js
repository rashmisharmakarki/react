import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM is an object here. so we are importing whatever the 'react-dom' package is exporting to be captured inside the object called ReactDOM and importing it in the index.js.

//render is a fucntion here. 
//document is the foundation of the browser. Everything goes and stays in the document object. It is the global object. 
//getElemetById is a browser side function

//there's a index.html file in the public folder which has a only html element called <div> in the entire body. This div has an id of root. And that is that div which is selected by document.getElementById('root)code snippit. we target that div with the id of root and then we are telling ReactDom that what is inside that div should be replaced by <App /> 
//Then we are importing App function from App.js file

