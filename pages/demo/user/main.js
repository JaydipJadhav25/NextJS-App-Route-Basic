import { useRouter } from "next/router";
const MianPage = () =>{
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h1>MianPage</h1>
          
        </div>
    )
    
    }
    export default MianPage;