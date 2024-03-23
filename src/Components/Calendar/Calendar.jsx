// import React from 'react'
// import { Card } from '@chakra-ui/react';
// const Calendar = () => {
//     return (
//         <>

//             <Card height={'20rem'} width={'20rem'} boxShadow='lg' marginTop={'-30rem'} margin-left={'70rem'} position={'absolute'}>
//                 <h1>Satyam Jha</h1>
//             </Card>
//         </>
//     )
// }

// export default Calendar;



import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, setOptions, Toast } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Calendar() {
    const [myEvents, setEvents] = useState([]);
    const [isToastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState();

    const myView = useMemo(
        () => ({
            calendar: { type: 'month' },
            agenda: { type: 'month' },
        }),
        [],
    );

    const handleToastClose = useCallback(() => {
        setToastOpen(false);
    }, []);

    const handleEventClick = useCallback((args) => {
        setToastMessage(args.event.title);
        setToastOpen(true);
    }, []);

    useEffect(() => {
        getJson(
            'https://trial.mobiscroll.com/events/?vers=5',
            (events) => {
                setEvents(events);
            },
            'jsonp',
        );
    }, []);

    return (
        <>
            <Eventcalendar
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                eventDelete={true}
                data={myEvents}
                view={myView}
                onEventClick={handleEventClick}
            />
            {/* <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} /> */}
        </>
    );
}

export default Calendar;