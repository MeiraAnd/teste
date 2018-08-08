import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    text-rendering: optimizeLegibility !import;
    -webkit-font-smoothing: antialiased !import;
    font-family: sans-serif;
  }
`;