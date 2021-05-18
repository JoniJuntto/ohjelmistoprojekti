import React,{useState} from 'react'
import Etusivu from './components/Etusivu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kysely from './components/Kysely';
import Vastaukset from './components/Vastaukset';

function App() {

  const [kysely_id, setKysely_id] = useState(null);

  return(
    <BrowserRouter>
          <Switch>
            <Route path='/' exact render={ (props) => <Etusivu {...props} kysely_id={kysely_id} setKysely_id={setKysely_id} />}/>
            <Route path='/kysely/' render={ (props) => <Kysely {...props} kysely_id={kysely_id} setKysely_id={setKysely_id}/>}/>
            <Route path='/vastaukset' component={Vastaukset} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;