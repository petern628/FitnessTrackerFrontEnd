import { useEffect, useState } from "react";
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
            <p>By <b>{routine.creatorName}</b></p>
            <p>{routine.goal}</p>
            <p><i>This routine is {routine.isPublic ? 'public' : 'private'}</i></p>
            {routine.activities?.map((activity) => {
                return (
                    <div key={activity.id} className="info">
                        <h4>{activity.name} ({activity.count} reps/{activity.duration} minutes)</h4>
                        <p>{activity.description}</p>
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