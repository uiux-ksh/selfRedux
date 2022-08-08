import useUsers from "../../store/user";
import {useEffect} from "react";
import {url2} from "../../youtube/api";
import Title from "../Title";

function Lol() {

    const { users,execute} = useUsers(state => state);
    useEffect(() => {
        execute(url2);
    },[])
    console.log(users);

    return(
        <>
        <Title text="리그오브레전드" />
        <div>   // <div>{users.map((user) => {
                return <div key ={user.id}  className='bg'><img src={`${user.snippet.thumbnails.maxres.url}`} alt=""/></div>
            })}</div></div>
        </>
    )
}
export default  Lol;