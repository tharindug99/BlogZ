"use client";

import React from "react";
import useFetchPosts from "@/hooks/fetchAllPosts";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";
import { Post } from "@/app/models/post"; // Adjust the import path as needed

interface UserListProps {
  userId?: number;
}

const UserList: React.FC<UserListProps> = ({ userId }) => {
  const { data, loading, error } = useFetchPosts(userId);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const { message, posts } = data;

  console.log(message);
  console.log(posts);

  return (
    <div className="container mx-auto p-4 pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post: Post) => (
          <div
            key={post._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.content}</p>
            <div className="mt-auto pt-10">
              <Button>See more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
