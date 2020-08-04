export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_BEGIN = 'REQUEST_BEGIN';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function beginRequest() {
    return {
        type : REQUEST_BEGIN
    }
}

export function requestSuccess(data) {
    return {
        type : REQUEST_SUCCESS,
        data : data
    }
}

export function requestFailed() {
    return {
        type : REQUEST_FAILED
    }
}

export function fetchProfiles() {
    console.log('inside action')
    return dispatch => {
        console.log('flakjfa');
        dispatch(beginRequest())
        return fetch('/getProfiles').then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(requestSuccess(data))
            // this.setState({
            //     profiles : data.profiles
            // })
        });
    }
}