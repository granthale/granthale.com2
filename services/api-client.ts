import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://podcasters.spotify.com/pod/api",
    params: {}
});

export {CanceledError};