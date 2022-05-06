//import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";


export default function Home() {

  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <Button variant="outline-info" onClick={() => router.push("/Component/Userform")}>userAdd</Button>
      <Button  variant="outline-success" onClick={() => router.push("/Component/Usertable")}>userTable</Button>
       {/* <button onClick={router.push()}>userAdd</button>
      {/* <Link href="/Component/Userform">userAdd</Link>
      <Link href="/Component/Usertable">userAdd</Link> */} 
     
    </div>
  )
}
