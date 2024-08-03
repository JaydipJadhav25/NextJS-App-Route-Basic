import { useRouter } from "next/router";

const DyanamicPage = () =>{
    const router = useRouter();
    console.log(router);
        return (
        <div>
            <h2>This is {router.query.username} page</h2>
            {/* case : 1 */}
            <button onClick={e => router.push(`/${router.query.username}/public/setting`)}>Click On GO TO Setting Case:1</button>
            {/* case : 2 */}
            <br/>
            <button
            onClick={e=> router.push({
            pathname : "/[name]/[user]/setting",
            query : {
                name: router.query.username,
                 user : "public"
                }
            })}
            >
           GO TO Setting Page Case:2
            </button>
      <br/>
            <button
            onClick={e => router.replace("/")}
            >
                To go Home  Using replace
            </button>
   <hr/>
            <button
            onClick={e=> router.reload()}
            >ReLoad Page</button>
        </div>
        );
    
    }
    export default DyanamicPage;