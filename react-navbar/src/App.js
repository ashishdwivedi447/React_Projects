
import './App.css';

const links = ["Services","Projects","About"];
function App() {
  return (
    <div className="App">
      <div className='nav'>
        <img className='logo' src="https://img.freepik.com/free-vector/bakery-logo-template_441059-121.jpg?w=2000" alt="logo"/>
        <div className='linkblock'>
        {links.map((e)=>{
              return <Typelinks links={e}/>
        })}
        </div>
        <button className='contact'>Contact</button>     
      </div>
    </div>
  );
}

function Typelinks({links}){
  return <div className='linkdata'>{links}</div>
}
export default App;
