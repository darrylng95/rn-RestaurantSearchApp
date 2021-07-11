import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer UbpvKT3Yo-_zISqEJ7UlUVxuUk71lL4Na6PmjJOJcVBIHh5_bwkskO83UJNDUAeGp2DtMXsg4_LLEJMFbsoUdx0fY1hJxcRvckdX6b9R2W3NFL2faFOBNKFNF6XcYHYx',

    }
})