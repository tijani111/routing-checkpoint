import React,{ useState } from 'react';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Descrip from './Components/Descrip';


function App() {
  const [search,setSearch]= useState("");
  const [rate,setRate]= useState(1);
  const [input, setInput] = useState("");
  const [inputSrc, setInputSrc] = useState("");
  const [inputRate, setInputRate] = useState("");
  const [id, setId] = useState(1);
  const [inputDescription, setInputDescription] = useState("");
 const [movieList, setMovieList] = useState([{titre:"Bad Boys",img:"https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2Fd62%2F235%2F89b2f7e957238d577eab98f871%2Fmovies-47111-9001656769.jpg?format=822x700&quality=85",rate:5,description:"Bad Boys II is a bloated, unpleasant assembly-line extrusion in which there are a lot of chases and a lot of killings and explosions. Oh, it's all done with competent technique. Michael Bay, the director, is a master of this sort of thing, and his screenplay was labored over by at least four writers, although there is not an original idea in it." ,video:"https://www.youtube.com/watch?v=AURhd5TCG6U",id:1},
  {titre:"The dark knight",img:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg/220px-Batman_The_Dark_Knight_Returns_%28film%29.jpg" ,rate:3,description:"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",video:"https://www.youtube.com/watch?v=EXeTwQWrcwY",id:2},{titre:"Titanic",img:"https://images-na.ssl-images-amazon.com/images/I/71e5a3+CStL._RI_.jpg" ,rate:5,description:"Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio.",video:"https://www.youtube.com/watch?v=kVrqfYjkTdQ",id:3}
  ]);
  
  const addHandler=(newFilm)=>{
   input&&  setMovieList(
      [...movieList,newFilm]
    );
  };
  const Home=()=>{
    return (<div className="Home">
      
      <Filter id={id} setId={setId} rate={rate} setRate={setRate} setSearch={setSearch} addHandler={addHandler} input={input} setInput={setInput} inputSrc={inputSrc} setInputSrc={setInputSrc} inputRate={inputRate} setInputRate={setInputRate}  
      InputDescription={inputDescription}
      setInputDescription={setInputDescription} />
    <MovieList movieList={movieList} search={search} rate={rate}/>
    </div>);
  }
  return (
   
   <div className="App">
<BrowserRouter>
     <h2>Movio</h2>

     <Switch>
     <Route exact path='/'  render={(props) => (
    <Home {...props}  movieList={movieList} />
  )} />
      <Route path='/Descrip/:ID'  render={(props) => (
    <Descrip {...props}  movieList={movieList} />
  )} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
