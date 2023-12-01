import { useState } from "react";
import { Link } from 'react-router-dom'
import './GroupCalendar.css'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";

export default function GroupCalendar() {
    const events = [
        {
            title: "Evento",
            start: "2023-11-05T08:00:00",
            end: "2023-11-05T09:00:00",
            color: "rgb(174, 57, 174)",
        },
    ];
    return (
        <div>
            <div>
            <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialview={"dayGridMonth"}
            selectable={true}
            headerToolbar={{
                start: "today",
                center: "title",
                end: "prev, next",
            }}
            height={"85vh"}
            events={events}
            eventDidMount={(info) => {
                return new bootstrap.Popover(info.el,{
                    title: info.event.title,
                    placement: "auto",
                    trigger: "hover",
                    customClass: "popoverStyle",
                    content:
                        "<p>contenido.</p>",
                    html: true,

                });
            }
            }
            />
            <Link to="/MisCalendarios"> Volver </Link>
            </div>

            

        </div>
        
    )
}
