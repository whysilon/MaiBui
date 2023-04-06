import { Timestamp, collection, doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";


export function getCurrentDate(){
    const time = new Date();
    return time.toDateString();
}

export async function addCalorieData(data,email) {
    const docref = doc(db,`calorie_records/${email}/calorie_record_${getCurrentDate()}`,Timestamp.now().toDate().toISOString())
    const res = await setDoc(docref,data)
    console.log(res)
}

export async function getCalorieData(email){
    
}