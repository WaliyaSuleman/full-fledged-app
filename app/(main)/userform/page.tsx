"use client"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userSchema } from "@/schemas/userSchema"



import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUser } from "@/actions/createUser"
import { useRouter } from "next/navigation"


const userFormPage = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            age: "",
            semester: "",
            information: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof userSchema>) {
        createUser(values).then(() => {
            router.back()
        })
    }
    return (
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6 justify-center h-screen ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className="w-[500px]" placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                    <Input className="w-[500px]" placeholder="Enter your Age" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="semester"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Semester</FormLabel>
                                <FormControl>
                                    <Input className="w-[500px]" placeholder="Enter your Semester" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="information"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Information</FormLabel>
                                <FormControl>
                                    <Input className="w-[500px]" placeholder="Enter your Information" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Add</Button>
                </form>
            </Form>

        </main>
    )
}

export default userFormPage