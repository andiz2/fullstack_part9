import React from "react";
import {useState, useEffect} from 'react';
//import {Diary, Weather, Visibility, NewDiary} from "./types.js";
import {Diary} from "./types.js";
//import axios from 'axios';
import {getAllDiaries, createDiary} from '../../backend/flight-diary/src/services/diaryService.js'


const App = () => {
  const [newDiary, setNewDiary] = useState('');
  const [diaries, setDiaries] = useState<Diary[]>([
    //{id: 1, date: 'data', weather: Weather.Sunny, visibility: Visibility.Good, comment:'comment'},
    //{id: 2, date: 'suntem azi', weather: Weather.Cloudy, visibility: Visibility.Great, comment:'fara com'}
  ]);

  useEffect(() => {
    //axios.get<Diary[]>('http://localhost:3001/api/diaries').then(response => {
      //console.log(response.data);
      //setDiaries(response.data as Diary[]);
    //})
    console.log("fetching all diaries")
    getAllDiaries().then(data => 
      setDiaries(data)
    )
  }, [])

  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log("adding a new diary: ", newDiary)
    /*const diaryToAdd = {
      id: diaries.length + 1,
      date: (new Date()).toLocaleString('en-US'),
      weather: Weather.Cloudy,
      visibility: Visibility.Good,
      comment: 'to add'
    }
    axios.post<Diary>('http://localhost:3001/api/diaries',
       {comment: newDiary}).then (response => {
        setDiaries(diaries.concat(response.data))
       })*/
    createDiary({comment: newDiary}).then(data => {
      console.log("received from backend: ", data)
      setDiaries((prevDiaries) => [...prevDiaries, data])
  })  

    setNewDiary('')
  }
/*
  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const diaryToAdd = {
      id: diaries.length + 1,
      date: (new Date()).toLocaleString('en-US'),
      weather: Weather.Stormy,
      visibility: Visibility.Good,
      comment: 'let\'s say'
    }
    setDiaries(diaries.concat(diaryToAdd));
    setNewDiary('');
  }
    */
  return (
    <div>
      <form onSubmit = {diaryCreation}>
        <input
          value = {newDiary}
          onChange={(event) => setNewDiary(event.target.value)}
        />
        <button type='submit'>add</button>
      </form>
     <ul>
      {diaries.map(diary => 
        <li key = {diary.id}>{diary.date} {diary.comment} {diary.visibility}</li>
      )}
     </ul>
    </div>
  );
};

export default App;

