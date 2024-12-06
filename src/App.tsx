import { useState } from 'react'
import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            dayGridPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          initialView='dayGridMonth'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          events={[
            {
              start: '2024-12-11T10:00:00',
              end: '2024-12-11T16:00:00',
              display: 'background',
              color: '#ff9f89',
              overlap: false
            },
            {
              start: '2024-12-13T10:00:00',
              end: '2024-12-13T16:00:00',
              display: 'background',
              color: '#ff9f89'
            },
            {
              start: '2024-12-24',
              end: '2024-12-28',
              overlap: false,
              display: 'background'
            },
            {
              start: '2024-12-06',
              end: '2024-12-08',
              overlap: false,
              display: 'background'
            }

          ]}
        />
      </div>
    </>
  )
}

export default App
