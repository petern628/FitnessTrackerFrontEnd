import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../helpers/apiHelper";

function CreateActivity() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();

    async function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;

        if (!name || !description) {
            setErrorMessage("All fields are required.");
            return;
        }

        const token = localStorage.getItem('userToken');

        if (token) {
            await createActivity(name, description, token);
            navigate('/activities');
        }
        else {
            return;
        }
    }
    return (
        <div className="info">
            <h1>Create Activity</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" />
                </div>
                <button>Submit</button>
            </form>
            <span>{errorMessage}</span>
        </div>
    )
}

export default CreateActivity;