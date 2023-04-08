import { Timestamp, collection, doc, getDoc, getDocs, query, setDoc, where } from "@firebase/firestore";
import { db } from "../../firebase-config";


export function getCurrentDate(){
    const time = new Date();
    return time.toDateString();
}

export async function addCalorieData(data,email) {
    const docref = doc(db,`calorie_records/${email}/calorie_record_${getCurrentDate()}`,Timestamp.now().toDate().toISOString())
    const res = await setDoc(docref,data)
    return res
}

export async function getCalorieData(email){
    const getCalories = async() => {
    try{
    const colref = collection(db,`calorie_records/${email}/calorie_record_${getCurrentDate()}`)
    const q = query(colref)
    const querySnapshot = await getDocs(q)
    return querySnapshot
    }
    catch (err){
        console.error(err)
        return "Error!"
    }
    }
    return getCalories()
}