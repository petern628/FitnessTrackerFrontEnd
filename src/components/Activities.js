import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../helpers/apiHelper";


function Activities({ isLoggedIn }) {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setActivities(await getActivities());
        }
        fetchData();
    }, []);

    const activitiesHtml = activities?.map((activity) => {
        return (
            <div key={activity.id} className="info">
                <h4>{activity.name} <Link to={`/add-to-routine/${activity.id}`}>+ Add to Routine</Link></h4>
                <p>{activity.description}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Activities <Link to="/create-activity">+</Link></h1>
            {activitiesHtml}
        </div>
    );
}
export default Activities;