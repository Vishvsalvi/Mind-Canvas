import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/app/db"


const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: {label: "Email", type: "text", placeholder: "email"},
                password: {label: "Password", type: "password", placeholder: "password"}
            },
            async authorize(credentials:any) {
            
                const {email, password} = credentials
                const userExists = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })      
            
                if(!userExists) {
               
                    throw new Error("Invalid credentials")
                }
            
                return {
                    id: userExists.id.toString(),
                    password,
                    email: userExists.email,
                    name: userExists.firstName
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {

    },
    pages: {
        signIn: "/signin"
    }
})

export {handler as GET, handler as POST}