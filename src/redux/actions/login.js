export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => {
    return dispatch => {
        dispatch({ type: LOGIN_REQUEST });
        
        fetch('url_del_tuo_server/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Errore durante il login');
        }
        return response.json();
        })
        .then(data => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        })
        .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        });
    };
};