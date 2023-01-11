const apiUrl = 'https://fitnesstrac-kr.herokuapp.com/api';

export async function registerUser(user) {
    try {
         const response = await fetch(`${apiUrl}/users/register/`,
              {
                   method: 'POST',
                   headers: {
                        'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(user)
              });

         const result = await response.json();

         if (result.error)
              throw result.error;

         return result.data;
    } catch (error) {
         console.error(`There was an issue registering the user.`, error);
    }
}


export async function fetchAllRoutines() {
     try {
          const response = await fetch(`${apiUrl}/routines/`);
          const result = await response.json();

          if (result.error)
               throw result.error;

          return result.data.routines;
     } catch (error) {
          console.error('There was an issue fetching the posts from the API.', error);
     }
}
