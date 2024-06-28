import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5a350bde740b426098b414955c1ca6af'
        
    }

})