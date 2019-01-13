import axios from 'axios';

const wastelookupInstance = axios.create({
    baseURL: 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'
})

export default wastelookupInstance;