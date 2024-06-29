import UserList from '@/components/UserList'
import React from 'react'

function Users() {
  return (
    <div>
      <div className="py-24"> 
        <div className="items-center text-center font-bold text-5xl py-20">
          <h1>All users</h1>
          <UserList/>
        </div>
      </div>
    </div>
  )
}

export default Users