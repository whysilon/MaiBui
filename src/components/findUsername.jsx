import {doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase-config";

export const FindUsername = () => {
    const [username, setUsername] = useState('');

    useEffect(()=>{
        const find = async (email) => {
            const q = doc(db,'users',email);
            const snapshot = await getDoc(q);
            setUsername(snapshot.data().username);
        }

        find(localStorage.getItem('token'));
    },[])


    return (
        <div>
            <p1>{username}</p1>
        </div>
    )
}

export default FindUsername;