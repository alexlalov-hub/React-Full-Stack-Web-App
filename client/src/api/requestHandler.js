async function request(method, endpoint, body) {
    try {
        const url = 'http://localhost:5000' + endpoint;
        const headers = {
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Credentials': true,
        };

        const request = {
            method,
            credentials: 'include',
            headers,
        };

        if (body) {
            headers['Content-Type'] = 'application/json';
            request.body = JSON.stringify(body);
        }

        if (localStorage.getItem('user')) {
            headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }

        const res = await fetch(url, request);

        let data;

        if (res.status !== 204) {
            data = await res.json();
        }

        return { res, data };
    } catch (error) {
        throw error
    }

}

const GET = request.bind(null, 'GET');
const POST = request.bind(null, 'POST');
const PATCH = request.bind(null, 'PATCH');
const DELETE = request.bind(null, 'DELETE');

const requestService = {
    GET,
    POST,
    PATCH,
    DELETE
};

export default requestService;