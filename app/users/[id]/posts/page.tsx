import React from "react";
import PostsByUser from "@/components/PostsByUser";
///Is it here
function Posts() {
  return (
    <div className="flex flex-col items-center container mx-auto p-4 py-2">
      <PostsByUser />
    </div>
  );
}

export default Posts;
