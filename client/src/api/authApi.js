import { Axios } from "axios";

let authentication = async (dataObject) => {
    let response = await Axios.post('https://yourdomain.com', dataObject);

};

export {};