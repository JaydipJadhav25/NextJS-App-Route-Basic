import { useRouter } from "next/router";

const Index =()=>{
const router= useRouter();
console.log(router)
return (
    <div>
        <h1>This Is Setting Page  : {router.query.name} In {router.query.user} MODE</h1>
        <button
        onClick={e => router.push("/")}
        >GO TO HOME</button>
    </div>
)
}
export default Index;