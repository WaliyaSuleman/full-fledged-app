import { Button } from "@/components/ui/button"
import Link from "next/link"

const Home = () => {
  return (
   
    <main className="flex flex-col items-center justify-center h-screen gap-y-5">
      <h1 className="text-slate-900 font-bold text-3xl">Welcome to the university student portfolio</h1>
      <Button asChild size={"lg"}>
        <Link href="/home">Get Started</Link>
      </Button>
    </main>
  )
}

export default Home