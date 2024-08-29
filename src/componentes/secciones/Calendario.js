import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import FormularioPrecios from './precios/FormularioPrecios';
import FormularioModificarPrecios from './precios/FormularioModificarPrecios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';
import DeshabilitarFechas from './precios/DeshabilitarFechas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Eliminar from './precios/Eliminar';

function Precios_calendario({ buscar, actual, next, isDark }) {
  const [eventos, setEventos] = useState([]);
  const { register, handleSubmit, watch } = useForm()
  //Registrar precios
  const onSubmit = (data, obj) => {
    if (data.fecha_inicio && data.fecha_fin) {
      const dates = getDateRange(data.fecha_inicio, data.fecha_fin);
      for (let i = 0; i < dates.length; i++) {
        data.precio_doble && registrar(data.precio_doble, dates[i], "hotpink", "doble")
        data.precio_triple && registrar(data.precio_triple, dates[i], "#2cabce", "triple")
        data.precio_individual && registrar(data.precio_individual, dates[i], "#a856c9", "individual")
      }
    } else if (data.fecha_inicio && !data.fecha_fin) {
      data.precio_doble && registrar(data.precio_doble, data.fecha_inicio, "hotpink", "doble")
      data.precio_triple && registrar(data.precio_triple, data.fecha_inicio, "#2cabce", "triple")
      data.precio_individual && registrar(data.precio_individual, data.fecha_inicio, "#a856c9", "individual")
    }
  };
  //Registrar un evento / precio
  function registrar(data, inicio, color, tipoHabitacion) {
    setEventos(eventos =>
      [...eventos,
      {
        classNames: '',
        groupId: '',
        title: data,
        date: inicio,
        color: color,
        tipoHabitacion: tipoHabitacion
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
    console.log(data.tipoCambio)
    if (data.tipoCambio === "porcentaje") {
      individual = individual / 100;
      doble = doble / 100;
      triple = triple / 100;
    }
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
        if (eventos[i].extendedProps.tipoHabitacion === "individual") {
          if (data.tipoCambio === "porcentaje") {
            numero = numero + (numero * individual)
          } else if (data.tipoCambio === "cantidad") {
            individual = parseInt(individual)
            numero = numero + individual;
          }
          eventos[i].setProp("title", numero)
        } else if (eventos[i].extendedProps.tipoHabitacion === "doble") {
          if (data.tipoCambio === "porcentaje") {
            numero = numero + (numero * doble)
          } else if (data.tipoCambio === "cantidad") {
            doble = parseInt(doble)
            numero = numero + doble;
          }
          eventos[i].setProp("title", numero)
        } else if (eventos[i].extendedProps.tipoHabitacion === "triple") {
          if (data.tipoCambio === "porcentaje") {
            numero = numero + (numero * triple)
          } else if (data.tipoCambio === "cantidad") {
            triple = parseInt(triple)
            numero = numero + triple;
          }
          eventos[i].setProp("title", numero)
        }
      }
    }
  };
  function eliminar(data) {
    const tipoHabitacion = window.event.submitter.name;

    let eventos;
    if (data.fecha_inicio_borrar) {
      if (data.fecha_inicio_borrar && !data.fecha_fin_borrar) {
        eventos = getEventsOnDate(new Date(data.fecha_inicio_borrar)); //solo un dia
      } else if (data.fecha_inicio_borrar && data.fecha_fin_borrar) {
        let startDate = new Date(data.fecha_inicio_borrar);
        let endDate = new Date(data.fecha_fin_borrar);
        eventos = getEventsBetweenDates(startDate, endDate);
      }
      for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].extendedProps.tipoHabitacion === "individual") {
          if (tipoHabitacion === "individual_borrar") {
            eventos[i].remove();
          }
        } else if (eventos[i].extendedProps.tipoHabitacion === "doble") {
          if (tipoHabitacion === "doble_borrar") {
            eventos[i].remove();
          }
        } else if (eventos[i].extendedProps.tipoHabitacion === "triple") {
          if (tipoHabitacion === "triple_borrar") {
            eventos[i].remove();
          }
        }
      }
    }
  }
  function deshabilitar(data) {
    const tipoHabitacion = window.event.submitter.name;
    let eventos;
    if (data.fecha_inicio_deshabilitar) {
      if (data.fecha_inicio_deshabilitar && !data.fecha_fin_deshabilitar) {
        eventos = getEventsOnDate(new Date(data.fecha_inicio_deshabilitar)); //solo un dia
      } else if (data.fecha_inicio_deshabilitar && data.fecha_fin_deshabilitar) {
        let startDate = new Date(data.fecha_inicio_deshabilitar);
        let endDate = new Date(data.fecha_fin_deshabilitar);
        eventos = getEventsBetweenDates(startDate, endDate);
      }
      for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].extendedProps.tipoHabitacion === "individual") {
          if (tipoHabitacion === "individual_deshabilitar") {
            eventos[i].setProp("classNames", "hide")
          } else if (tipoHabitacion === "individual_habilitar") {
            eventos[i].setProp("classNames", "")
          }
        } else if (eventos[i].extendedProps.tipoHabitacion === "doble") {
          if (tipoHabitacion === "doble_deshabilitar") {

            eventos[i].setProp("classNames", "hide")
          } else if (tipoHabitacion === "doble_habilitar") {
            eventos[i].setProp("classNames", "")
          }
        } else if (eventos[i].extendedProps.tipoHabitacion === "triple") {
          if (tipoHabitacion === "triple_deshabilitar") {
            eventos[i].setProp("classNames", "hide")
          } else if (tipoHabitacion === "triple_habilitar") {
            eventos[i].setProp("classNames", "")
          }
        }
      }
    }
  }
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

  return (
    <div className=' text-black  dark:text-white'>
      <ToastContainer  theme="dark"/>
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
          selectable
          select={function () {
            toast(
              <div>
                "hola"
              </div>)
          }}
          ref={calendarRef}
          height={600}
          locale={esLocale}
          events={eventos}
          plugins={[dayGridPlugin, interactionPlugin]}

        />
      </div>
      <div className='w-full my-6 p-5 rounded font-bold border-x-2 border-t-2 bg-slate-100 border-b-2 dark:border-b-0 border-orange-400 text-orange-400 dark:bg-slate-700  dark:border-cyan-400 dark:text-cyan-400 mb-10 '>
        MODIFICACIONES
      </div>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="dark:text-cyan-400 text-orange-400 hover:text-orange-500 dark:text-cyan-400 dark:hover:text-cyan-300 border-orange-400 dark:border-cyan-400" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-orange-400 dark:text-gray-400 border-transparent hover:border-gray-200 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Aumentar precios</button>
          </li>
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Deshabilitar / habilitar fechas</button>
          </li>
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Borrar</button>
          </li>
          
        </ul>
      </div>
      <div id="default-styled-tab-content" className='bg-gray-50 dark:bg-gray-800'>
        <div class="hidden p-4 rounded-lg " id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
          {/* Formulario para editar los precios */}
          <FormularioModificarPrecios handleSubmit={handleSubmit} onEdit={onEdit} buscar={buscar} actual={actual} register={register} watch={watch} />
        </div>
        <div class="hidden p-4 rounded-lg " id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          {/* Formulario para deshabilitar los precios */}
          <DeshabilitarFechas handleSubmit={handleSubmit} onEdit={deshabilitar} buscar={buscar} actual={actual} register={register} />
        </div>
        <div class="hidden p-4 rounded-lg " id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
          <Eliminar handleSubmit={handleSubmit} onEdit={eliminar} buscar={buscar} actual={actual} register={register} />

        </div>
        
      </div>
      {/* Boton siguienteF */}
      <div className='text-start dark:text-white flex justify-end'>
        <button type="button" onClick={() => next(buscar(actual))} className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
          Siguiente
        </button>
      </div>
    </div>
  )
}
export default Precios_calendario