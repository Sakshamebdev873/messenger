'use client'
import React from 'react'
import { User } from '../generated/prisma'
import Image from 'next/image'

interface AvatarProps {
  user?: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative inline-block">
      {/* Avatar Container */}
      <div className="relative rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 border border-gray-200 shadow-sm">
        <Image
          src={user?.image || '/images/placeholder.jpg'}
          alt="Avatar"
          fill
          className="object-cover"
        />
      </div>

      {/* Online Status Indicator */}
      <span
        className="absolute bottom-0 right-0 block h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500 ring-2 ring-white"
      />
    </div>
  )
}

export default Avatar
