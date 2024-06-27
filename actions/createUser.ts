"use server"

import prisma from "@/lib/db";
import { userSchema } from "@/schemas/userSchema"
import { z } from "zod"

export const createUser=async(values:z.infer<typeof userSchema>)=>{

    const validatedValues = userSchema.safeParse(values);

    if(!validatedValues.success){
        return({err:"Invalid values"});
    }

    const user = await prisma.user.create({
        data:{
            name: validatedValues.data?.name,
            age: validatedValues.data?.age,
            semester: validatedValues.data?.semester,
            information: validatedValues.data?.information,
            liked: false
        }
    })

};