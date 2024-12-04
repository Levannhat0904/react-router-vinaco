import { useLocation } from "react-router-dom"

function Home(){
         const location = useLocation()
         console.log(location)
        return(
                <h1>Home</h1>
        )
}
export default Home