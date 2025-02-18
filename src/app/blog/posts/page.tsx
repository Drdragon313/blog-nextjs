import React from "react";
import { posts } from "@/app/lib/placeholderData";
import Post from "@/app/ui/components/post/Post";
const page = () => {
	return (
		<>
			<h1>Posts</h1>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</>
	);
};

export default page;
