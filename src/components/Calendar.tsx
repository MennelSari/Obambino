import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid' // to display the time
import frLocale from '@fullcalendar/core/locales/fr';
import HeaderParent from './HeaderParent';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable    
import "../calendar.css";
import Footer from './Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';


const Calendar = () => {

  const [events, setEvents] = useState<[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("URL DES EVENEMENTS");
      setEvents(response.data);
    } catch (error) {
      console.error("error");

    }
  };

  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent />
        <h1 className="text-5xl text-center font-bold mb-10">Retrouvez le planning d'Obambino !</h1>
        <div className="bg-white rounded-[20px] w-3/4 h-3/4 mx-auto m-4">
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
        headerToolbar={{
            start: 'today prev,next', 
            center: 'title',
            end: 'dayGridMonth,dayGridWeek,dayGridDay', // will normally be on the right. if RTL, will be on the left
            
          }}
      height= {"90vh"}
      handleWindowResize={true}
      locale={frLocale}
      events={events}
    />
    </div>
    <Footer />
    </div>
  )
  
}

export default Calendar;