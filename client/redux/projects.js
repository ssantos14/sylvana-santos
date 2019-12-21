import axios from 'axios';

const GOT_PROJECTS = 'GOT_PROJECTS';

const gotProjects = (projects) => ({
    type: GOT_PROJECTS,
    projects
})

export const getProjects = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/api/projects');
        console.log('data from axios request: ', data)
        dispatch(gotProjects(data));
    } catch (error) {
        console.error(error);
    }
}

const initialState = [];

const projects = (state = initialState, action) => {
    switch (action.type) {
        case GOT_PROJECTS:
            return action.projects;
        default: 
            return state;
    }
}

export default projects;