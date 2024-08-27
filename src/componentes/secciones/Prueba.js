import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import FormularioPrecios from './precios/FormularioPrecios';
import FormularioModificarPrecios from './precios/FormularioModificarPrecios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';
function Prueba({ buscar, actual, next, isDark }) {

  const [eventos, setEventos] = useState([
    { title: 500, date: '2024-08-01', color: '#2cabce' },
    { title: 250, date: '2024-08-02', width: "50px", color: 'hotpink' },
    {
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: '#2cabce',
      eventBorderColor: "white",
      title: 500,
    },
    {
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: 'hotpink',
      title: 300
    },
    {
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: '#5a88dd',
      title: 100
    }
  ]);

  const { register, handleSubmit } = useForm()
  const onSubmit = (data, obj) => {
    if (data.fecha_inicio && !data.fecha_fin) {
      data.precio_doble && registrar(data.precio_doble, data.fecha_inicio, "hotpink", "Habitación doble - ", 0)
      data.precio_triple && registrar(data.precio_triple, data.fecha_inicio, "#2cabce", "Habitación triple - ", 0)
      data.precio_individual && registrar(data.precio_individual, data.fecha_inicio, "#a856c9", "Habitación individual - ", 0)
    }
    if (data.fecha_inicio && data.fecha_fin) {
      data.precio_doble && registrar(data.precio_doble, data.fecha_inicio, "hotpink", "Habitación doble - ", data.fecha_fin, 0)
      data.precio_triple && registrar(data.precio_triple, data.fecha_inicio, "#2cabce", "Habitación triple - ", data.fecha_fin, 0)
      data.precio_individual && registrar(data.precio_individual, data.fecha_inicio, "#a856c9", "Habitación individual - ", data.fecha_fin, 0)
    }
  };
  const calendarRef = useRef(null)
  const handleDateClick = (arg) => {
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    console.log(events)
  };
  console.log(calendarRef)
  const onEdit = (data, obj) => {

    // let incremento_individual = data.incremento_individual;
    // let incremento_doble = data.incremento_doble;
    // let incremento_triple = data.incremento_triple;
    let eventos;
    if (data.fecha_inicio_edit && !data.fecha_fin_edit) {
      eventos = getEventsOnDate(new Date(data.fecha_inicio_edit)); //solo un dia

    } else if (data.fecha_inicio_edit && data.fecha_fin_edit) {
      let startDate = new Date(data.fecha_inicio_edit);
      let endDate = new Date(data.fecha_fin_edit);
      eventos = getEventsBetweenDates(startDate, endDate);
    }

    for (let i = 0; i < eventos.length; i++) {
      let numero = eventos[i]._def.title;
      numero = parseInt(numero)
      numero = numero + (numero * 0.1)
      console.log(eventos[i])
      eventos[i].setProp("title", numero)
    }

  };
  const getEventsBetweenDates = (startDate, endDate) => { //Buscar eventos de x a y días
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const eventsInRange = events.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end || event.start); // Use event.end if available, otherwise use event.start
      // mirar si hay overlaps
      return eventStart < endDate && eventEnd >= startDate;
    });
    return eventsInRange;
  };
  const getEventsOnDate = (date) => { //buscar eventos X día
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const eventsOnDate = events.filter(event => {
      const eventStart = new Date(event.start);
      return eventStart.toDateString() === date.toDateString();
    });
    return eventsOnDate;
  };
  function registrar(data, inicio, color, tipoHabitacion, fin) { //Registrar una habitación
    fin ?
      setEventos(eventos =>
        [...eventos,
        {
          groupId: '',
          title: data,
          startRecur: inicio,
          endRecur: fin ? fin : inicio,
          color: color
        }
        ]
      )
      :
      setEventos(eventos =>
        [...eventos,
        {
          groupId: '',
          title: data,
          description: "bueeeena",
          date: inicio,
          color: color
        }
        ]
      )
  }

  return (
    <div className=' text-black  dark:text-white'>
      {/* Formulario para agregar los precios */}
      <FormularioPrecios handleSubmit={handleSubmit} onSubmit={onSubmit} buscar={buscar} actual={actual} register={register} />
      <div className='flex flex-row justify-between md:justify-end col-end space-x-3 '>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-purple-500 mr-3 '>
          </div>
          <span className='text-sm '>
            Individual
          </span>
        </div>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-pink-500 mr-3 '>
          </div>
          <span className='text-sm '>
            Doble
          </span>
        </div>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-cyan-500 mr-3 '>

          </div>
          <span className='text-sm '>
            Triple
          </span>
        </div>
      </div>
      {/* Calendario */}
      <div className='mt-5 md:-mt-10'>
        <FullCalendar

          ref={calendarRef}
          height={600}
          locale={esLocale}
          events={eventos}
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}

        />
      </div>
      {/* Formulario para editar los precios */}
      <FormularioModificarPrecios handleSubmit={handleSubmit} onEdit={onEdit} buscar={buscar} actual={actual} register={register} />
      {/* Boton siguienteF */}
      <div className='text-start dark:text-white flex justify-end'>
        <button type="button" onClick={() => next(buscar(actual))} className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
          Prueba
        </button>
      </div>
    </div>
  )
}
export default Prueba