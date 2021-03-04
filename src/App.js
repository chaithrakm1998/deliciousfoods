
import './App.css';
import Fetch from 'react-fetch';
import Header from './components/header/header.components';
import HomePage from './pages/homepage/homepage.component';
const App=() => {
  const APP_ID = 'fc75343d';
  const APP_KEY='268eb207d163565c35b292039c6c50f0	';
  const url= 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=red%20apple&app_id={APP_ID}&app_key={APP_KEY}'





  return (
    <div className='App'>
      <div className='app-container'>
        <Header/>
        <HomePage/>
        </div>
        </div>
    
  );
}

export default App;
