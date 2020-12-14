import React,{ useState, useEffect} from 'react';
import Todo from './Todo';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos,setTodos]=useState(['abc','def']);
  const [input,setInput]=useState(['']);
  
//when the app loads we need to listen to the database and fetch new todos as they get added/removed
useEffect(()=>{
  // this code here... fires when the app.js loads
  // useeffect is fired every single time  i type in the box  bcz i'm changing the i/p also the input is the dependency 
  // if he has no dependency means if he has just empty array means only time it fires when i refresh the page or i start the page
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    //console.log(snapshot.docs.map(doc=>doc.data()));// returns an array of objects
    setTodos(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo})))// flat array with no objects
  })
},[]);

  const addTodo=(event)=>{
    event.preventDefault();//stop refreshing

    db.collection('todos').add({ // this will add to the db which then fires off a snapshot which then update our todos
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()// this iis firebase is server where our app is hosted
    })

    setInput('');
  }
    return (
    <div className="App">
       <h1>Hello Clever Programmers!</h1>
       <form>   {/* we use form bcz we just want to hit enter to add it to our list*/}
       <FormControl>
          <InputLabel >Write a Todo</InputLabel>
          <Input value={input} onChange={event=> setInput(event.target.value)}/>
       </FormControl>


       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
       </Button>
       </form>
       <ul>
         {todos.map(todo=>(
           <Todo todo={todo}/>
           //<li>{todo}</li>
         ))};
       </ul>
    </div>
  );
}

export default App;
