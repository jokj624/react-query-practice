import axios from 'axios';

export const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchPosts = async () => {
	const response = await client.get(`/posts`);
	
	return response.data;
}