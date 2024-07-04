"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import useFetchUser from '@/hooks/usefetchUser';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import Loading from './Loading';

function UserDetail() {
    
    
    const params = useParams();
    
    const userId = params.id as unknown as number | null;
    
    const { user, loading, error } = useFetchUser(userId);

    if (loading) {
        return  <div className='flex items-center align-middle'>
                    <Loading/>
                </div>;
    }
    if (error) {
        return <div>Error:{error}</div>;
    }
    if (!user) {
        return <div>No users found</div>;
    }

    return (
        <div className="flex flex-col items-center container mx-auto p-4 py-36">
            <div className="bg-white shadow-md w-4/5 rounded-lg p-4 flex">
                <div className="flex flex-col flex-start w-4/5">
                    <div className="flex col-span-2 mb-4">
                        <Image
                            alt='profile pic'
                            src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.phone}</p>
                        <p className="text-gray-600">{user.website}</p>
                    <div className="mt-auto lg:hidden md:hidden sm:hidden">
                        <Button>View all Info</Button>
                    </div>
                        
                    </div>
                </div>

                <div className="flex flex-col ml-10">
                    {/* <div className="mt-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <p className="text-gray-600">{user.company.name}</p>
                        <p className="text-gray-600">{user.company.catchPhrase}</p>
                        <p className="text-gray-600">{user.company.bs}</p>
                    </div> */}
                    {/* <div className="mt-4">
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
                        <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                    </div> */}
                    <div className="mt-auto ">
                        <Button>View all Info</Button>
                    </div>
                </div>

            </div>

            <div className="bg-white shadow-md w-4/5 my-2 rounded-lg p-4 flex">
                <Link href={`/users/${userId}/posts`} className="block w-full">
                    <Button 
                    variant="default"
                    className="w-full"
                    >View my posts</Button>
                </Link> 
            </div>

        </div>
    );
}

export default UserDetail;
