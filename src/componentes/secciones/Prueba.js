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
    { title: 500, date: '2024-08-01', color: '#2cabce', },
    { title: 250, date: '2024-08-02', color: 'hotpink' },
    {
      groupId: "",
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: '#2cabce',
      eventBorderColor: "white",
      title: 500,
    },
    {
      groupId: "",
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: 'hotpink',
      title: 300
    },
    {
      groupId: "",
      startRecur: "2024-08-15",
      endRecur: "2024-08-26",
      color: '#5a88dd',
      title: 100
    }
  ]);

  const { register, handleSubmit } = useForm()

  //Registrar precios
  const onSubmit = (data, obj) => {
    if (data.fecha_inicio && data.fecha_fin) {
      const dates = getDateRange(data.fecha_inicio, data.fecha_fin);
      for (let i = 0; i < dates.length; i++) {
        data.precio_doble && registrar(data.precio_doble, dates[i], "hotpink")
        data.precio_triple && registrar(data.precio_triple, dates[i], "#2cabce")
        data.precio_individual && registrar(data.precio_individual, dates[i], "#a856c9")
      }
    } else if (data.fecha_inicio && !data.fecha_fin) {
      data.precio_doble && registrar(data.precio_doble, data.fecha_inicio, "hotpink")
      data.precio_triple && registrar(data.precio_triple, data.fecha_inicio, "#2cabce")
      data.precio_individual && registrar(data.precio_individual, data.fecha_inicio, "#a856c9")
    }
  };

  //Registrar un evento / precio
  function registrar(data, inicio, color) {
    setEventos(eventos =>
      [...eventos,
      {
        classNames: '',
        groupId: '',
        title: data,
        date: inicio,
        color: color
      }
      ]
    )
  }
  const calendarRef = useRef(null)

  //Modificaciones de precio
  const onEdit = (data, obj) => {
    let individual = data.precio_individual_incr;
    let doble = data.precio_doble_incr;
    let triple = data.precio_triple_incr;
    console.log("Individual: " + individual)
    console.log("doble: " + doble)
    console.log("triple: " + triple)
    let eventos;
    if (data.fecha_inicio_edit) {
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
        eventos[i].setProp("title", numero)
      }
    }
  };

  //Rango de las fechas seleccionadas
  function getDateRange(startDate, endDate) {
    const dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
      dateArray.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

  //Buscar eventos de x a y días
  const getEventsBetweenDates = (startDate, endDate) => {
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const eventsInRange = events.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end || event.start); // Use event.end if available, otherwise use event.start
      return eventStart < endDate && eventEnd >= startDate;
    });
    return eventsInRange;
  };

  //buscar eventos X día
  const getEventsOnDate = (date) => {
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const eventsOnDate = events.filter(event => {
      const eventStart = new Date(event.start);
      return eventStart.toDateString() === date.toDateString();
    });
    return eventsOnDate;
  };

  function deshabilitar() {

  }

  return (
    <div className=' text-black  dark:text-white'>
      {/* Formulario para agregar los precios */}
      <FormularioPrecios handleSubmit={handleSubmit} onSubmit={onSubmit} buscar={buscar} actual={actual} register={register} />
      <div className='flex flex-row justify-between md:justify-end col-end space-x-3 '>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-purple-500 mr-3'>
          </div>
          <span className='text-sm '>
            Individual
          </span>
        </div>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-pink-500 mr-3'>
          </div>
          <span className='text-sm '>
            Doble
          </span>
        </div>
        <div className='flex w-fit'>
          <div className='h-[20px] w-[20px] rounded-full bg-cyan-500 mr-3'>
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
        />
      </div>
      {/* Formulario para editar los precios */}
      <FormularioModificarPrecios handleSubmit={handleSubmit} onEdit={onEdit} buscar={buscar} actual={actual} register={register} />
      <div>
        <button onClick={deshabilitar} className='bg-red-500 rounded p-4 font-semibold'> Deshabilitar </button>
      </div>
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