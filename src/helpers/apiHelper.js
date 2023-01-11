const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api';

// #region Post

// Register
export async function Register(username, password) {
    fetch(`${baseUrl}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// Login
export async function Login(username, password) {
    fetch(`${baseUrl}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// CreateRoutine
export async function CreateRoutine(name, goal, isPublic) {
    fetch(`${baseUrl}/routines`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// CreateActivity
export async function CreateActivity(name, description) {
    fetch(`${baseUrl}/activities/`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            description: description
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// CreateActivityRoutine
export async function CreateActivityRoutine(routineId, activityId, count, duration) {
    fetch(`${baseUrl}/routines/${routineId}/activities`, {
        method: 'POST',
        body: JSON.stringify({
            activityId: activityId,
            count: count,
            duration: duration
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// #endregion

// #region Get

// GetMe
export async function GetMe(token) {
    fetch(`${baseUrl}/me/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// GetRoutines
export async function GetRoutines() {
    fetch(`${baseUrl}/routines/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// GetUserRoutines
export async function GetUserRoutines(username) {
    fetch(`${baseUrl}/users/${username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// GetActivities
export async function GetActivities() {
    fetch(`${baseUrl}/activities/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// GetPublicRoutinesByActivity
export async function GetPublicRoutinesByActivity(id) {
    fetch(`${baseUrl}/activities/${id}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// #endregion

// #region Update

// UpdateRoutine
export async function UpdateRoutine(id, name, goal) {
    fetch(`${baseUrl}/routines/${id}/`, {
        method: "PATCH",
        body: JSON.stringify({
            name: name,
            goal: goal,
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// UpdateActivity
export async function UpdateActivity(id, name, description) {
    fetch(`${baseUrl}/activities/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            description: description
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// UpdateRoutineActivity
export async function UpdateRoutineActivity(id, count, duration) {
    fetch(`${baseUrl}/routine_activities/${id}/`, {
        method: 'PATCH',
        body: JSON.stringify({
            count: count,
            duration: duration,
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// #endregion

// #region Delete

// DeleteRoutine
export async function DeleteRoutine(id, token) {
    fetch(`${baseUrl}/routines/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// DeleteRoutineActivity
export async function DeleteRoutineActivity(id, token) {
    fetch(`${baseUrl}/routine_activities/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

// #endregion