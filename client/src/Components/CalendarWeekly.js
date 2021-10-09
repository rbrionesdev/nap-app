import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { Card } from 'semantic-ui-react';
import 'react-calendar/dist/Calendar.css';
import TimePickerDay from './TimePickerDay';

export default function CalendarWeekly() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <div>
      <br />
      <Card>
        <h1>Select Date</h1>
        <Calendar
          showWeekNumbers
          onChange={onChange}
          value={date}
        />
        {console.log(date)}
        {date.toString()}
        <br />
        <TimePickerDay />
      </Card>
    </div>
  )
}