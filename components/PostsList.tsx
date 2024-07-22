"use client";

import React from "react";
import useFetchPosts from "@/hooks/posts/fetchAllPosts";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";
import { Post } from "@/app/models/post";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
            key={post._id} // Use _id for the unique key
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <div className="w-full rounded-lg">
              <img
                className="rounded-lg"
                width={300}
                height={100}
                alt={post.title} // Use post.title for alt text
                src={post.image}
              />
            </div>

            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.badges.map((badge, index) => (
                <Badge key={`${post._id}-badge-${index}`} className="px-2">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <Link href={`/blogs/${post._id}`}>
                <Button variant="default">Read blog</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
