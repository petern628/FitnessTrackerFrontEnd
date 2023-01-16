import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPublicRoutinesByActivity, updateRoutine } from "../helpers/apiHelper";

function EditRoutine() {
    const params = useParams();
    const activityId = params.id;

    const navigate = useNavigate();

    const [routines, setRoutines] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    const [, setName] = useState();
    const [, setGoal] = useState();

    useEffect(() => {
        async function fetchData() {
            setRoutines(await getPublicRoutinesByActivity(activityId));
        }
        fetchData();
    }, [activityId]);

    async function handleSubmit(event, routineId) {
        event.preventDefault();

        const name = event.target.name.value;
        const goal = event.target.goal.value;

        if (!name || !goal) {
            setErrorMessage("All fields are required.");
            return;
        }

        const updatedRoutine = await updateRoutine(routineId, name, goal);

        console.log(updatedRoutine);

        navigate('/routines');
    }

    const routinesFormsHtml = routines?.map((routine) => {
        return (
            <div key={routine.id} className="info">
                <form onSubmit={(event) => handleSubmit(event, routine.id)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="goal">Goal</label>
                        <input type="text" name="goal" onChange={(event) => setGoal(event.target.value)} />
                    </div>
                    <button>Submit</button>
                </form>
                <span>{errorMessage}</span>
            </div>
        )
    });

    return (
        <div>
            <h1>Edit Routines</h1>
            <p>All of these routines contain the activity we're using the API to return. It would seem that you would have a one to many relationship between routine and activities, but I guess creating decent data models is too challenging for whoever made this lesson. I have no idea why you would do anything this way ever, but holla at your girl if you ever figure it out!</p>
            {routinesFormsHtml}
        </div>
    );
}

export default EditRoutine;