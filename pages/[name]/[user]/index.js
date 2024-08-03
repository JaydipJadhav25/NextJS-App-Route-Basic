import { useRouter } from "next/router";

const Index =()=>{
const router= useRouter();
console.log(router)
return <h1>This Is Indexx of User : {router.query.user} In {router.query.user} MODE</h1>
}
export default Index;