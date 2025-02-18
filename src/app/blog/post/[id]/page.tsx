import React from "react";
import { posts } from "@/app/lib/placeholderData";
const page = async ({ params }: { params: { id: string } }) => {
	// Ensure params are awaited (though usually not needed in page components)
	const { id } = params;

	const post = posts.find((post) => post.id === id);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default page;
