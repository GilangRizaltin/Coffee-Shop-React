import React, { useState } from 'react';
import { format, addDays, startOfWeek, endOfWeek } from 'date-fns';

const WeekDatePicker = () => {
  const [startDate, setStartDate] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [endDate, setEndDate] = useState(endOfWeek(new Date(), { weekStartsOn: 1 }));

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
  };

  return (
    <div>
      <label>Start Date:</label>
      <input type="date" value={format(startDate, 'yyyy-MM-dd')} onChange={handleStartDateChange} />

      <label>End Date:</label>
      <input type="date" value={format(endDate, 'yyyy-MM-dd')} onChange={handleEndDateChange} />
    </div>
  );
};

export default WeekDatePicker;
