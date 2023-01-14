import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoutine } from "../helpers/apiHelper";

function CreateRoutine() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();
    const [isPublicChecked, setIsPublicChecked] = useState(false);

    function handleChange() {
        setIsPublicChecked(!isPublicChecked);
    };

    async function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const goal = event.target.goal.value;
        const isPublic = isPublicChecked;

        if (!name || !goal) {
            setErrorMessage("All fields are required.");
            return;
        }

        const token = localStorage.getItem('userToken');

        if (token) {
            // const routine = 
            await createRoutine(name, goal, isPublic, token);
            navigate('/user-routines');
        }
        else {
            return;
        }
    }

    
    return (
        <div className="info">
            <h1>Create Routine</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="goal">Goal</label>
                    <input type="text" name="goal" />
                </div>
                <div className="checkbox-label">
                    <input type="checkbox" checked={isPublicChecked} onChange={handleChange} name="isPublic" />
                    <label htmlFor="isPublic">Public</label>
                </div>
                <button>Submit</button>
            </form>
            <span>{errorMessage}</span>
        </div>
    )
}

export default CreateRoutine;