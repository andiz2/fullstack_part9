import React, {useState, useEffect} from "react";
import { DiaryEntry } from "./types.tsx";
import axios from 'axios';
import DiaryList from "./component/DiaryList.tsx";

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
          <DiaryList diaryList = {diaries}/>
        </div>
    )
}

export default App;