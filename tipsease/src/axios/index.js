import axios from 'axios';

export default function withAuth() {
    const token = localStorage.getItem('authorization');
    const instance = axios.create({
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    });
    return instance;
}