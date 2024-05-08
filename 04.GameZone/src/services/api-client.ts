import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api/games',
    params:{
        key:'5a350bde740b426098b414955c1ca6af'
    }

})