import {createRoot} from "react-dom/client"//imported named function

import App from "./App" //imported default function

const rootElement = document.getElementById("root"); //get the root HTML element
const root = createRoot(rootElement); //create the object of the root element
root.render(<App />); //attach App component. similar to calling the App() function but denoted as HTML tag

