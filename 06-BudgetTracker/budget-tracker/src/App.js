import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from './components/Layout/Layout';

export const utilityFunction = () => {
    return 1
};

function App() {

    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
}

export default App;
