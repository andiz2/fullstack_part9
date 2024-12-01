import React, {useState, useEffect} from "react";
import { DiaryEntry, NewDiaryEntry, Visibility, Weather } from "./types.tsx";
import axios from 'axios';
import DiaryList from "./component/DiaryList.tsx";
import AddDiary from "./component/AddDiary.tsx";

const App = () => {
    const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
    const [newDiary, setNewDiary] = useState('');

    useEffect(() => {
        axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(
            response => setDiaries(response.data)
        )

    }, [])

    const diaryCreation = (event: React.SyntheticEvent) => {
      event.preventDefault()
      const diaryToAdd = {
        comment: newDiary,
        id: diaries.length + 1,
        date: newDiary,
        weather: Weather.Cloudy,
        visibility: Visibility.Good
      }
      setDiaries(diaries.concat(diaryToAdd));
      setNewDiary('')
    }

    const addDiary = (diary: NewDiaryEntry) => {
      const newDiary = {...diary, id: diaries.length + 1};
      setDiaries(diaries.concat(newDiary));
      setNewDiary('');
    }

    return (
        <div>
          <DiaryList diaryList = {diaries}/>
          <AddDiary addDiary={addDiary} />
        </div>
    )
}

export default App;