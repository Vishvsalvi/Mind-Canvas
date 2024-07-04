"use server"
import prisma from "../db"
import cloudinary from '../../cloudinaryConfig';
import { getServerSession } from "next-auth";

export async function signUp(firstName:string, lastName:string, phoneNumber:string, email:string, password:string){
    const userExists = await prisma.user.findUnique({
        where: {email}
    })

    if(userExists){
        return {};
    }

    const user = await prisma.user.create({
        data: {
            firstName, lastName, email, password, phoneNumber
        }
    })


    return user;
}


// export async function createPost(title:string, content:string, coverImageUrl:string, authorId:number) {
   
//     console.log(getServerSession());
    

// }

export async function testServerSession(){
    console.log(await getServerSession());
}   

export const deleteImage = async (publicId:string) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};