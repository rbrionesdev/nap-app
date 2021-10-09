import React, { useState } from 'react'
import TimePicker from 'react-time-picker'


export default function TimePickerDay() {
  // const [value, onChange] = useState('10:00');
  const [hour, setHour] = useState("");

  const onChange = hour => {
    setHour(hour);
  }
  return (
    <div>
      <h1>Pick the hour</h1>
      <TimePicker
        name='Pick the hour'
        disableClock
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        onChange={onChange}
        value={hour}
      />
      < br />
      {console.log(hour)}
      {/* {hour.toString()} */}
    </div>
  )
}

