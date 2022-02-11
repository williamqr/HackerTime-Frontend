import logo from './logo.svg';
import './App.css';
import Main from './app/Navigators/main'
import { NavigationContainer } from "@react-navigation/native";
import Navbar from './app/Navigators/topbar'

function App() {
  return (
    <NavigationContainer>
         <Navbar/>
         <Main/>
    </NavigationContainer>
  );
       
}

export default App;
