import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import frLocale from '@fullcalendar/core/locales/fr';
import HeaderParent from './HeaderParent';
import "../calendar.css";
import Footer from './Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {URL_Vmcloud} from "../URL_List";


const Calendar = () => {

  const [events, setEvents] = useState<[]>([]);
  
 //to get the events from the database
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL_Vmcloud}api/event/calendar`);
      setEvents(response.data);
      console.log(response.data);
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
      plugins={[ dayGridPlugin ]} // to display the calendar
      initialView="dayGridMonth"
        headerToolbar={{
            start: 'today prev,next', 
            center: 'title',
            end: 'dayGridMonth,dayGridWeek,dayGridDay', // buttons for switching between views
            
          }}
      height= {"90vh"}
      handleWindowResize={true} //to resize the calendar when the window is resized
      locale={frLocale} //to display the calendar in french
      events={events} //to get the events from the database
    />
    </div>
    <Footer />
    </div>
  )
  
}

export default Calendar;