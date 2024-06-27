import { z } from "zod"


export const userSchema = z.object({
    name: z.string().min(2,{message:"Name should contain atleast 3 character"}),
    information: z.string().min(10,{message:"Name should contain atleast 3 character"}),
    age:z.string().min(1).max(3),
    semester:z.string().min(1),

  })