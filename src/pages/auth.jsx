import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "../components/login"
import SignUp from "../components/signup"
import { useNavigate, useSearchParams } from "react-router-dom"
import { UrlState } from "../context"
import { useEffect } from "react"


const AuthenticationPage = () => {
  // So when the user is logged in so it shouldn't be able to go to the auth page so we need to work on that
  const navigate = useNavigate();

  const {isAuthenticated, loading} = UrlState();

  // Navigating the user back to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, loading]) // this keeps in mind that they are the dependecies for for this navigation 


  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">Login/SignUp</h1>

      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className='w-full grid grid-cols-2'>
          <TabsTrigger value="Login" className="grow">Login</TabsTrigger>
          <TabsTrigger value="Signup" className="grow">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Login />
        </TabsContent>
        <TabsContent value="Signup">
          <SignUp />
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default AuthenticationPage