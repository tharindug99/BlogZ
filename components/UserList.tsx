"use client";

import React from "react";
import useFetchAllUsers from "@/hooks/users/useFetchAllUsers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";


function UserList() {
  const { users, loading, error } = useFetchAllUsers();

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

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => {
          console.log(user._id); // Log userId here
          return (
            <div key={user._id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <Link href={`/users/${user._id}`}>
                <Button variant="default">View Profile</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
