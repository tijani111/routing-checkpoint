import React from 'react';
import Rate from './Rate';
import{InputGroup,FormControl,Button} from "react-bootstrap";
import {useState}from "react";
import 'font-awesome/css/font-awesome.min.css';

export default function Filter({rate,setSearch,setRate,addHandler,input,inputSrc,inputRate,setInput,setInputRate,setInputSrc,inputDescription,setInputDescription}) {
    
   const [show, setShow] = useState(false);
   const toggle=()=>{
       setShow(
           !show
       )
    
   }
  
   console.log(show);
    const inputHandler=(e)=>{
        setInput(e.target.value);
    }
    const inputSrcHandler=(e)=>{
        setInputSrc(e.target.value);
    }
    const inputRateHandler=(e)=>{
        setInputRate(e.target.value);
    }
    const inputDescriptionHandler=(e)=>{
        setInputDescription(e.target.value);
    }
    const add=()=> {
        const newFilm={titre:input,img:inputSrc,rate:inputRate,description:inputDescription}

        addHandler(newFilm);
        setInput("");
        setInputSrc("");
        setInputRate("");
        setInputDescription("");
        toggle();
    }

    return (
        <>
        <div>
    <div className="Filter">
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{<i class="fas fa-search"></i>}</InputGroup.Text>
    <FormControl
      placeholder="Search by title"
      aria-label="Search"
      aria-describedby="basic-addon1"
      onChange={(e)=>setSearch(e.target.value)}
    />
  </InputGroup>
       </div>
       
       <div className="Add">
           
           <Button variant="primary" onClick={toggle}>Add</Button>
           {show?<div><input value={input} type="text" placeholder="add the name of the movie here" onChange={inputHandler}/>
           <input value={inputSrc} type="text" placeholder="add the link of the image here" onChange={inputSrcHandler}/>
           <input value={inputRate} type="text" placeholder="add your rating here" onChange={inputRateHandler}/>
           <input value={inputDescription} type="text" placeholder="add your description here" onChange={inputDescriptionHandler}/>
            <Button variant="primary"onClick={add}>Submit</Button >
            <Button variant="secondary"onClick={toggle}>Cancel</Button >
           </div>:null}
  
       </div>
       <Rate rate={rate} setRate={setRate}/>
        </div>
        </>
    )
}
