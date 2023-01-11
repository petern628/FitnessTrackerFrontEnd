const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api';

// #region Post

// Register
export async function register(username, password) {
    const response = await fetch(`${baseUrl}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });
    
    return response.json();
}

// Login
export async function login(username, password) {
    const response = await fetch(`${baseUrl}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });
    
    return response.json();
}

// createRoutine
export async function createRoutine(name, goal, isPublic) {
    const response = await fetch(`${baseUrl}/routines`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    });
    
    return response.json();
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
    
    return response.json();
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
    
    return response.json();
}

// #endregion

// #region Get

// getMe
export async function getMe(token) {
    const response = await fetch(`${baseUrl}/me/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    
    return response.json();
}

// getRoutines
export async function getRoutines() {
    const response = await fetch(`${baseUrl}/routines/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return response.json();
}

// getUserRoutines
export async function getUserRoutines(username) {
    const response = await fetch(`${baseUrl}/users/${username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
}

// getActivities
export async function getActivities() {
    const response = await fetch(`${baseUrl}/activities/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
}

// getPublicRoutinesByActivity
export async function getPublicRoutinesByActivity(id) {
    const response = await fetch(`${baseUrl}/activities/${id}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
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
    
    return response.json();
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
    
    return response.json();
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
    
    return response.json();
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
    
    return response.json();
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
    
    return response.json();
}

// #endregion