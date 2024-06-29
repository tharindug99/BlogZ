"use client";

import React from 'react';
import useFetchUserPosts from '@/hooks/fetchUserPosts';
import useFetchUser from '@/hooks/fetchUser';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Loading from './Loading';
import Image from 'next/image';




function PostsByUserList() {

  const params = useParams();
  const userId = Number(params?.id);
  const { posts, loading, error } = useFetchUserPosts(userId);
  const { user } = useFetchUser(userId);

  if (loading) {
    return <div>
      <Loading/>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-40 -z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col relative">
            <div className="flex items-center absolute">
              <Image 
                src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
                alt="pro pic"
                height={60}
                width={60}
                className="rounded-full"
              />
              <div className='ml-4'>
                <p className="text-gray-500 text-sm">Published by <strong>{user?.name}</strong></p>
                <p className="text-gray-500 text-sm">4 days ago</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-16">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.body}</p>
            
            <div className="mt-auto pt-10">
              <Button>See more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default PostsByUserList;
