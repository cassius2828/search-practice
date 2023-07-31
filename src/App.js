import './App.css';
import tachyons from 'tachyons';
import { Card } from './components/Card';
import {Display} from './components/Display';
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  return (
    <div className="App">
<InfiniteScroll
dataLength={10}
height='40rem'
style={{width: '90vw', border: 'solid 3px lime'}}
> <Display/></InfiniteScroll>
   

    </div>
  );
}

export default App;
