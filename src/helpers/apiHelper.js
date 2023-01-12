const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api';

// #region Post

// Register
export async function register(username, password) {
    const response = await fetch(`${baseUrl}/users/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    return await response.json();
}

// Login
export async function login(username, password) {
    const response = await fetch(`${baseUrl}/users/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });
    
    return await response.json();
}

// createRoutine
export async function createRoutine(name, goal, isPublic, token) {

    console.log(`it is ${isPublic} that this routine is public`)

    const response = await fetch(`${baseUrl}/routines`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    });

    return await response.json();
}

// createActivity
export async function createActivity(name, description) {
    const response = await fetch(`${baseUrl}/activities/`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            description: description
        })
    });

    return await response.json();
}

// createActivityRoutine
export async function createActivityRoutine(routineId, activityId, count, duration) {
    const response = await fetch(`${baseUrl}/routines/${routineId}/activities`, {
        method: 'POST',
        body: JSON.stringify({
            activityId: activityId,
            count: count,
            duration: duration
        })
    });

    return await response.json();
}

// #endregion

// #region Get

// getMe
export async function getMe(token) {
    const response = await fetch(`${baseUrl}/users/me/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    return await response.json();
}

// getRoutines
export async function getRoutines() {
    const response = await fetch(`${baseUrl}/routines/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

// getUserRoutines
export async function getUserRoutines(username, token) {
    const response = await fetch(`${baseUrl}/users/${username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    return await response.json();
}

// getActivities
export async function getActivities() {
    const response = await fetch(`${baseUrl}/activities/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

// getPublicRoutinesByActivity
export async function getPublicRoutinesByActivity(id) {
    const response = await fetch(`${baseUrl}/activities/${id}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

// #endregion

// #region Update

// updateRoutine
export async function updateRoutine(id, name, goal) {
    const response = await fetch(`${baseUrl}/routines/${id}/`, {
        method: "PATCH",
        body: JSON.stringify({
            name: name,
            goal: goal,
        })
    });

    return await response.json();
}

// updateActivity
export async function updateActivity(id, name, description) {
    const response = await fetch(`${baseUrl}/activities/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            description: description
        })
    });

    return await response.json();
}

// updateRoutineActivity
export async function updateRoutineActivity(id, count, duration) {
    const response = await fetch(`${baseUrl}/routine_activities/${id}/`, {
        method: 'PATCH',
        body: JSON.stringify({
            count: count,
            duration: duration,
        })
    });

    return await response.json();
}

// #endregion

// #region Delete

// deleteRoutine
export async function deleteRoutine(id, token) {
    const response = await fetch(`${baseUrl}/routines/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}

// deleteRoutineActivity
export async function deleteRoutineActivity(id, token) {
    const response = await fetch(`${baseUrl}/routine_activities/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}

// #endregion