import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { attachActivityRoutine, getMe, getUserRoutines } from "../helpers/apiHelper";

function AddToRoutine({ isLoggedIn }) {
    const params = useParams();
    const activityId = params.id;

    const navigate = useNavigate();

    const [userRoutines, setUserRoutines] = useState([]);
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        async function fetchData() {
            if (isLoggedIn) {
                const user = await getMe(token);
                setUserRoutines(await getUserRoutines(user.username, token))
            }
        }
        fetchData();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const routineId = event.target.routine.value;
        const count = event.target.count.value;
        const duration = event.target.duration.value;

        alert(routineId);
        alert(count);
        alert(duration);
        alert(activityId);

        const routineActivity = await attachActivityRoutine(routineId, activityId, count, duration);

        console.log(routineActivity);
        
        if (routineActivity.id)
            navigate('/user-routines');
    }

    const routinesDropDownHtml = (
        <select id="routine">
            {userRoutines.map((routine) => {
                return (<option key={routine.id} value={routine.id}>{routine.name}</option>);
            })}
        </select>
    );

    return (
        <div className="info">
            <h1>Add Activity to Routine</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="routine">Routine</label>
                {routinesDropDownHtml}
                <div>
                    <label htmlFor="count">Count</label>
                    <input type="text" name="count" />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name="duration" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddToRoutine;