"use server"

import prisma from "@/lib/db"

 export const deleteUser= async(userid: string)=>{

    return await prisma.user.delete({
        where: {id:userid},
    })
 }