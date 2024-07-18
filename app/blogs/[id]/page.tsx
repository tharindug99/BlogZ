"use client";
import React from "react";
import useFetchUserPost from "@/hooks/posts/useFetchUserPostbyID";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";

const BlogScreen = () => {
  const params = useParams();
  const postId = params.id as unknown as number | null;
  const { post, user, loading, error } = useFetchUserPost(postId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Error: {error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>No post available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-20 flex justify-center items-center">
      <div className="bg-white rounded-lg lg:mt-8 w-full md:w-3/4 lg:w-1/2">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={post.image}
          alt="Blog Post"
        />

        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600">
              By <span className="font-semibold">{user?.name}</span>
            </div>
            <div className="text-sm text-gray-600">{post.id}</div>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-center">{post.title}</h2>
          <p className="text-gray-700 text-xl text-center">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
