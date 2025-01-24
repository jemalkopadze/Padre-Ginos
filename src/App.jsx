import { createRoot } from 'react-dom/client'
import Pizza from "./Pizza";

const App = () => {
    return (
        <div>
            <h1>Padre Gino's - Order Now</h1>
            <Pizza name= "Peperoni" description="pep. cheese, n stuff"/>
            <Pizza name= "Peperoni" description="pep. cheese, n stuff"/>
            <Pizza name= "Peperoni" description="pep. cheese, n stuff"/>
        </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
