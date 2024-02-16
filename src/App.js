import Card from './Card';
import Navbar from './Navbar';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="App">
      <Navbar />
      <div className="relative flex flex-wrap justify-center items-center gap-4 mt-12 mb-20">
        {arr.map((item, index) => (
          <Card key={index} number={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
