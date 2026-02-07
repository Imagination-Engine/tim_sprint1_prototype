import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex-1 h-full relative">
        <Canvas />
      </main>
    </div>
  );
}

export default App;