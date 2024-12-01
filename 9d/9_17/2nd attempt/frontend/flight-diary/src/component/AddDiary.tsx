import React, { useState } from 'react';
import { NewDiaryEntry, Weather, Visibility } from '../types';

const AddDiary = ({ addDiary }: { addDiary: (diary: NewDiaryEntry) => void }) => {
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [weather, setWeather] = useState<Weather>(Weather.Sunny); // Default to 'Sunny'
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great); // Default to 'Great'

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newDiary: NewDiaryEntry = {
      date,
      weather,
      visibility,
      comment,
    };

    addDiary(newDiary);
    // Clear form fields after submission
    setDate('');
    setComment('');
    setWeather(Weather.Sunny); // Reset weather to default
    setVisibility(Visibility.Great); // Reset visibility to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Comment:
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Weather:
          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value as Weather)}
          >
            <option value={Weather.Sunny}>Sunny</option>
            <option value={Weather.Rainy}>Rainy</option>
            <option value={Weather.Cloudy}>Cloudy</option>
            <option value={Weather.Windy}>Windy</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Visibility:
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value as Visibility)}
          >
            <option value={Visibility.Great}>Great</option>
            <option value={Visibility.Good}>Good</option>
            <option value={Visibility.Poor}>Poor</option>
          </select>
        </label>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddDiary;
