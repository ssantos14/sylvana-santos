import axios from 'axios';

const GOT_SKILLS = 'GOT_SKILLS';

const gotSkills = (skills) => ({
    type: GOT_SKILLS,
    skills
})

export const getSkills = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/api/skills');
        dispatch(gotSkills(data));
    } catch (err) {
        console.error(err);
    }
}

const initialState = []

const skills = (state = initialState, action) => {
    switch (action.type) {
        case GOT_SKILLS:
            return action.skills
        default:
            return state
    }
}

export default skills;