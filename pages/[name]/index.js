import { useRouter } from "next/router";

const Index =()=>{
const router= useRouter();
console.log(router)
return <h1>This Is Indexx of Name : {router.query.name}</h1>
}
export default Index;