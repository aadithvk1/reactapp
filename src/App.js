import React, { useState } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import format from 'date-fns/format';
import AppHeader from './AppHeader'; // Assuming AppHeader is a component that renders the header
import './App.scss';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <AppHeader /> {/* Renders the default Backpack header, can be customized */}
      <main className="App__main">
        <h1 className="App__title">Reservation Date</h1>

        <div className="App__calendar-container">
          <BpkCalendar
            onDateSelect={handleDateSelect}
            selectionConfiguration={{
              type: CALENDAR_SELECTION_TYPE.single,
              date: selectedDate,
            }}
          />
        </div>

        <div className="App__button-container">
          <BpkButton onClick={() => console.log('Continue clicked!', selectedDate)}>
            Continue
          </BpkButton>
        </div>

        {selectedDate && (
          <p className="App__selected-date">
            Selected Date: {formatDateFull(selectedDate)}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;