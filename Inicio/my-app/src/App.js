import './App.css';
import AppBar from './Components/Base/AppBar/AppBar';

function App() {
  return (
    <>
        
       <AppBar title="Prueba" subtitle="Uno"></AppBar>
       <AppBar title="PRUEBA" subtitle={2}></AppBar>

      
    </>
  );
}

export default App;
