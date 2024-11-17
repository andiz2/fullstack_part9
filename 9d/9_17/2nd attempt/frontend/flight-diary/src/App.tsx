import React, {useState, useEffect} from "react";
import { DiaryEntry } from "./types.tsx";
import axios from 'axios';


const App = () => {
    const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  //  const [newDiary, setNewDiary] = useState('');

    useEffect(() => {
        axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(
            response => setDiaries(response.data)
        )

    }, [])
    console.log('din app', diaries)

    return (
        <div>
            <ul>
                {diaries.map(diary =>
                    <li key = {diary.id}>
                      <h3>{diary.date}</h3>
                      <p>visibility: {diary.visibility}</p>
                      <p>weather: {diary.weather}</p>
                      
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App;