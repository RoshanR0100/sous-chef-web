import './App.css';
import Home from './screens/Home';
import {Helmet} from "react-helmet";

function App() {
  return (
        <div className="App">
          <Helmet>
                <meta charSet="utf-8" />
                <title>SOUS CHEF</title>
                <link rel="canonical" href="https://sous-chef-web.com/" />
                <meta name="description" content="Recipe Recommendation Website" />
            </Helmet>
            <div>
                <h3 className='Main-Text'>SOUS CHEF</h3>
            </div>
          <header className="App-header">
            <Home />
          </header>
        </div>
  );
}

export default App;
