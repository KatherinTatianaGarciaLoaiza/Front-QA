const URL_BASE = 'https://despliegueback.herokuapp.com';

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

export function fetchQuestions() {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${URL_BASE}/GetAllQuestions`
            )
            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchOwnerQuestions(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/getAllOwner/${userId}`)
            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchQuestion(id, modificar) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/getQuestion/${id}`)
            const data = await response.json()
            dispatch(success({ question: data, redirect: null }))
            if(modificar){
                return data;
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postQuestion(question) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/create`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(question)
                }
            )
            const id = await response.text()
            dispatch(success({redirect: `/question/${id}`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteQuestion(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/delete/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(success({redirect: `/list`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postAnswer(answer) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/addAnswer`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answer)
                }
            )
            const data = await response.json()
            dispatch(success({redirect: `/question/${answer.questionId}`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function putQuestion(question) {
    console.log(JSON.stringify(question))
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/update`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(question)
                }
            )            
            const id = await response.text()
            dispatch(success({redirect: `/question/${id}`}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

