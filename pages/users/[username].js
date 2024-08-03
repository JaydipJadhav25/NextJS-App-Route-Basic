import { useRouter } from "next/router";

const DyanamicPage = () =>{
    const router = useRouter();
    console.log(router);
        return <h2>This is {router.query.username} page</h2>
    
    }
    export default DyanamicPage;