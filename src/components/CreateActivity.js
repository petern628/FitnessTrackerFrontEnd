import { useState } from "react";
import { createActivity } from "../helpers/apiHelper";

function CreateActivity() {
    const [errorMessage, setErrorMessage] = useState();

    const token = localStorage.getItem('userToken');

    async function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;

        const createdActivity = await createActivity(name, description, token);

        if (createdActivity.id)
            alert('it was created');
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
    );
}

export default CreateActivity;

// Create a new component
// Go to App.js, create a route for that component
// Create a form to allow the user to input data to create an activity
// Implement a handle submit action for when the form is submitted
// 
