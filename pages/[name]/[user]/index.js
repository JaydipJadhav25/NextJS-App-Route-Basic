import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () =>({user : null , loading : false});


const Index =()=>{
    const  user = useUser();

const router= useRouter();

useEffect(()=>{
    if(user.user == null){
        router.replace("/")
    }
},[router , user.user])
console.log(router)
return <h1>This Is Indexx of User : {router.query.user} In {router.query.user} MODE</h1>
}
export default Index;