import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";





export default async function Page() {

  

  const session = await getServerSession(authOptions);
  if (session?.user) {
    //CICD test check - 10 
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}
