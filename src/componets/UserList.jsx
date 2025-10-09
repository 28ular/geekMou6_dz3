import {useUsers} from "../store/users.js";
import {useEffect} from "react";

export const UserList = () => {

const {users , error , loading , fetchUsers} = useUsers()
useEffect(() => {
    fetchUsers()
}, [])

    if (loading) {
        return <p>loading...</p>
    }

    console.log(loading)
    if (error) {
        return <p>{error}</p>
    }
    return (

        <>
        <ul>
            {users.map((u) => <li key={u.id}>{u.name}</li>)}
        </ul>
        </>
    )
}