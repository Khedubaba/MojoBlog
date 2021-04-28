import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "Welcome to the new blog";
  // const person = { name: 'yoshi', age: 30};

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
