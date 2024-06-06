import './App.css'
import Films from './components/Films'
import films from './films'

function App() {
  return (
    <>
      <Films list={films} />,
    </>
  );
}

export default App
