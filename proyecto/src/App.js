import './App.css';

function App() {
  return (
    <div className="App">
      <form class="form">
        <div>

        <label>Usuario</label>
        <input type="text"></input>
        </div>
        <div>
        <br/>

        <label>Contraseña</label>
        <input type="password"></input>
        </div>
        <div>
        
          <button >Entrar</button>
          

        <a href="/">Olvidé mi Contraseña</a>
        </div>
      </form>
      
    </div>
  );
}

export default App;
