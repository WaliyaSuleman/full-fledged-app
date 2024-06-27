"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '@/actions/getUsers';
import { deleteUser } from '@/actions/deleteUser';
import { useRouter } from 'next/navigation';
import { updateUser } from '@/actions/updateUser';

const HomePage = () => {

   
    const[userInfo,setUserInfo]=useState<any>();
    const router = useRouter();
    useEffect(() => {
      getUsers().then((data)=>{
        setUserInfo(data)
      }).catch((err)=>{console.log(err);}
      )

    }, [userInfo])

    const handleDelete=useCallback((userid: string)=>{
        deleteUser(userid).then(()=>{
            router.refresh();
        });
    },[])

    const handleLike=useCallback((userid: string)=>{
      updateUser(userid,true).then(()=>{
        router.refresh();
    });
    },[])

    const handleUnLike=useCallback((userid: string)=>{
        updateUser(userid,false).then(()=>{
            router.refresh();
        });

    },[])
    
    return (

        <main className='flex flex-col '>
            <header className='flex items-center px-8 justify-between h-[100px]'>
                <h1 className='text-2xl font-bold'>All students</h1>
                <Button size={"lg"}>
                    <Link className='flex gap-x-2' href={"/userform"}><span><FaPlus /></span>Add New</Link>
                </Button>
            </header>

            <div className='flex flex-col items-center gap-y-6 mt-8'>
                {
                    userInfo?.map((userInfo:any) => {
                        return (

                            <Card key={userInfo.id} className='w-[500px] shadow-xl'>
                                <CardHeader>
                                    <CardTitle>{userInfo.name}</CardTitle>
                                    <CardDescription>
                                        Age:{userInfo.age} <br/>
                                        Semester:{userInfo.semester}
                                    </CardDescription>

                                </CardHeader>
                                <CardContent>
                                    <p>{userInfo.information}</p>
                                </CardContent>
                               <CardFooter className='flex items-center justify-between mx-10'>
                                <MdDeleteForever size={25} style={{cursor:'pointer'}} onClick={()=>handleDelete(userInfo.id)}/>
                                {userInfo.liked? (<AiFillLike size={25} style={{cursor:'pointer'}} onClick={()=>{handleUnLike(userInfo.id)}} />):(<AiOutlineLike size={25} style={{cursor:'pointer'}} onClick={()=>{handleLike(userInfo.id)}}/>)}
                                </CardFooter>
                            </Card>

                        );
                    })
                }
            </div>
        </main>
    )
}

export default HomePage