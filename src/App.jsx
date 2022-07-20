import Developer from './components/Developer';
import './App.css';

function App() {
  const user1 = {nome: "Gabriel", idade: 19, pais: "Brasil" }
  const user2 = {nome: "Felipe", idade: 28, pais: "Brasil"}
  const user3 = {nome: "Mariana", idade: 24, pais: "Itália"}

  
    return (
      <div className="App">
        <div className='container'>
        <Developer name={user1.nome} age={user1.idade} country={user1.pais}/>
        <Developer name={user2.nome} age={user2.idade} country={user2.pais}/>
        <Developer name={user3.nome} age={user3.idade} country={user3.pais}/>
        </div>
      </div>
    );
 
}

export default App;
