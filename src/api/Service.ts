import axios from "axios";
import { AXIOS_DEFAULT_CONFIG, DEMO_ROUTES } from "./Constants";


const testRouteFunction:any = () => {
    return axios.get(DEMO_ROUTES.TEST_ROUTE, AXIOS_DEFAULT_CONFIG);
}

export const DemoService = {
    'test': testRouteFunction
}