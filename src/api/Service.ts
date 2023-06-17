import axios from "axios";
import { LOCAL_REMOTE_ROUTES } from "./Constants";
import { LocalRemoteActionRequest } from "./requestTypes/LocalRemoteActionRequest";


const actionRouteFunction:any = (payload:LocalRemoteActionRequest) => {
    return axios.get(LOCAL_REMOTE_ROUTES.ACTION, {
        params: payload
    }).catch((error:any) => {
        return error.response
    });
}

export const LocalRemoteService = {
    'action': actionRouteFunction
}