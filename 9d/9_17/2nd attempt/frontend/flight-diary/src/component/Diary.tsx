import { DiaryEntry } from "../types.tsx";
import React from "react";

const Diary = (diary: DiaryEntry ) => {
    return(
    <li key = {diary.id}>
        <h3>{diary.date}</h3>
        <p>visibility: {diary.visibility}</p>
        <p>weather: {diary.weather}</p>
    </li>
    )
}

export default Diary;