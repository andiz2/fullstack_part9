import React, {useState, useEffect} from "react";
import { DiaryEntry } from "./types.tsx";
import axios from 'axios';
import Diary from "./component/Diary.tsx";


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
                  <Diary {...diary} />
                )}
            </ul>
        </div>
    )
}

export default App;