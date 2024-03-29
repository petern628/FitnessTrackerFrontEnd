import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getRoutines } from "../helpers/apiHelper";

function Routines() {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setRoutines(await getRoutines());
        }
        fetchData();
    }, []);

    const routinesHtml = routines?.map((routine) =>
        <div key={routine.id} className="info">
            <h2>{routine.name}</h2>
            <p>By <NavLink to={`/routines/${routine.id}/`}><b>{routine.creatorName}</b></NavLink></p>
            <p>{routine.goal}</p>
            <p><i>This routine is {routine.isPublic ? 'public' : 'private'}</i></p>
            {routine.activities?.map((activity) => {
                return (
                    <div key={activity.id} className="info">
                        <h4>{activity.name} ({activity.count} reps/{activity.duration} minutes)</h4>
                        <p>{activity.description}</p>
                        <p><NavLink to={`/edit-routine/${activity.id}/`}>Edit Routine</NavLink></p>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div>
            <h1>Routines</h1>
            {routinesHtml}
        </div>
    );
}

export default Routines;