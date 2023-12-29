import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjVmNjRhMDM3ZGNhMjY2OTIxY2MwYTRmMjZmMzkzYyIsInN1YiI6IjY0MTQyYjRmZTE4ZTNmMDgxNmM1ZTM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-hDDEyfEFTZwUEcpKCiAe__MIPBFLu6Ot4PLRHeCKw"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) =>{

    try {
        const {data} = await axios.get
        (BASE_URL + url,{
            headers : headers,
            params : params,
        })
        return data;
    } catch (err){
        console.log(err);
        return err;
    }

} 