import {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchTasks } from '../actions';
import Nav from "./Nav";
import Wrapper from "./Wrapper";

function App({fetchTasks}) {
  useEffect(() => fetchTasks())
  return (
    <div className="App">
      <Nav/>

      <div className={'container flex'}>
        <Wrapper/>
      </div>

    </div>
  );
}

export default connect(null, {fetchTasks})(App);
