import React from 'react';
import { useQuery } from 'react-query';

import { fetchPosts } from '../libs/api';

const Post = () => {
	const { isLoading, isError, data, error } = useQuery(['posts'], fetchPosts);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	
	return (
		<ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
	);
};

export default Post;
