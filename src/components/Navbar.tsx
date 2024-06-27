"use client"

import React, { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { Button } from "./ui/button";
import CommandSearch from "./CommandSearch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signIn, useSession, signOut } from "next-auth/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const session = useSession();
    const user = session.data?.user;


    return (
        <div className={cn("px-8 pt-5 inset-x-0  mx-5 sm:mx-auto z-50 backdrop-blur-sm", className)}>
            <Menu setActive={setActive}>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center font-extrabold">
                        <Link href="/">
                            Mind <span className="bg-black text-white px-1" >Canvas</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex max-w-xs items-center space-x-2">

                            <Button className=" text-neutral-900 bg-gray-50 hover:bg-gray-100" > <CommandSearch /> </Button>
                        </div>
                        {user ? <Link href="/writeblog" >
                            <Button variant="outline" > Write <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            </Button>
                        </Link> : <Button
                            onClick={() => signIn()}
                        >Login</Button>}



                        <DropdownMenu>
                            <DropdownMenuTrigger> <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/82429084?v=4" />
                                <AvatarFallback>VS</AvatarFallback>

                            </Avatar></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem><Link href="/profile" >Profile </Link></DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                {
                                    user ? <DropdownMenuItem
                                        onClick={() => signOut()}
                                    >Log out</DropdownMenuItem> : null
                                }

                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </Menu>
        </div>
    );
}
