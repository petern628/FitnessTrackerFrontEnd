import { useEffect, useState } from "react";
import { getActivities } from "../helpers/apiHelper";

function Activities() {
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
                <h4>{activity.name}</h4>
                <p>{activity.description}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Activities</h1>
            {activitiesHtml}
        </div>
    );
}

export default Activities;