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

    return (
        activities.map((activity) => 
            <div key={activity.id} className="info">
                <h1>{activity.name}</h1>
                <p>{activity.description}</p>
            </div>
        )
    );
}

export default Activities;
