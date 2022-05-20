
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import SettingProfile from './components/SettingProfile';
// import StatementPage from "./pages/StatementPage"

function App() {
  return (
    <div className="App">
      {/*<StatementPage/>*/}
      <Navbar />
  <SettingProfile/>
  <Form/>
    </div>
  );
}

export default App;
