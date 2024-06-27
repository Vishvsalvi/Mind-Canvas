import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BlogCard() {
  return (
    <Card className='py-5'>

      <div className="flex mx-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="px-4 py-2">
          <h1 className="font-semibold">Username</h1>
          <h2 className="font-normal text-xs">Published on: Jun 14, 2024</h2>
        </div>

        <div className="ml-auto px-4 mb-5">
          <h1 className="font-semibold"><Badge>Travel</Badge></h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mx-5 items-center">
        <div className='mb-4 sm:mb-0 sm:mr-4'>
          <h1 className='font-bold sm:text-xl text-gray-900'>
            From Darkness to Light: A Journey of Hope and Triumph.
          </h1>
          <h2 className='text-gray-600 text-sm hidden sm:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>

        <div className="w-full sm:w-[40%]">
          <img className="rounded-md w-full" src="https://www.travelandtourworld.com/wp-content/uploads/2024/06/Airlines-1.jpg" alt="Travel Image" />
        </div>
      </div>

    </Card>
  )
}
