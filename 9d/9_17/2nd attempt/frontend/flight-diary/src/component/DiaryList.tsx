import React from 'react';
import { DiaryEntry } from '../types';
import Diary from './Diary';

const DiaryList = ({diaryList}: {diaryList: DiaryEntry[]}) => {
    return (
        <ul>
            {diaryList.map(diary =>(
                <Diary {...diary} />
            ))}
        </ul>
    )
}

export default DiaryList;