import logo from './logo.svg';
import './App.css';
import Docs from './components/Docs';
function App() {
  const os = [" Android", " Blackberry", " iPhone", " WindowsPhone"];
  const manufacturer=[" Samsung"," HTC"," Micromax", " Apple" ];
  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {os.map((e)=>{
            return <Docs type={e}/>
        })}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {manufacturer.map((f)=>{
            return <Docs type={f}/>
        })}
      </ul>
    </div>
  );
}


export default App;
