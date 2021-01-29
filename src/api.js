import axios from 'axios';

const CHANNEL_ID = 'UCcMKkd33WZYB5BbompylT-g'
const KEY = 'AIzaSyALriAvaLIwySa0Xk8DHV7ENa7bbuOybZ8';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
        channelId: CHANNEL_ID
    }
})