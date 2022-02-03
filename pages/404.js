import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const ErrorPage = () => {
 const route =useRouter()
    useEffect(() => {
    setTimeout(()=>{
route.push('/')
    },5000)
    }, [])


    return ( 
        <div className="error">
            <h2>Oppps... page not found</h2>
            <h1>Error 404</h1>
            <p>go back to <Link href="/"><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default ErrorPage;