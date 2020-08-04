import {
    REQUEST_SUCCESS, REQUEST_BEGIN, REQUEST_FAILED
} from './actions'

var requestState = {
    isFetching : false,
    status : null,
    fetched_data : []
}

export default function dataFetcher (state = requestState, action) {
    
    console.log('in reducer', state)
    console.log(action)
    switch(action.type) {
        case REQUEST_BEGIN:
            return Object.assign({},state, {
                isFetching : true
            })
        case REQUEST_SUCCESS: 
            return Object.assign({},state, {
                isFetching : null,
                fetched_data : action.data,
                status : 'successfull'
            })
        case REQUEST_FAILED:
            return Object.assign({},state, {
                isFetching : null,
                status : 'failed'
            })
        default:
            return state
    }

}