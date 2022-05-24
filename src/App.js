
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import SettingProfile from './components/SettingProfile';
import Menu from './pages/Menu';
// import StatementPage from "./pages/StatementPage"

  const  MenuData = 
    {
  menuheading: "Menu",
  menudesc:"Hello Pizzeria italiana welcome back",
  accountheading: "My Account",
  accountdesc: "Hello Pizzeria italiana welcome back",
}



function App() {
  return (
    <div className="App">
      {/*<StatementPage/>*/}
  {/*<Navbar /> */}
  {/*<SettingProfile>*/} 
  { /*<Form/>*/ }
   {<Menu MenuData = {MenuData}  />}
    </div>
  );
}

export default App;
