import { Timestamp, collection, doc, getDocs, query, setDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";

/**
 * This is a control class to intereact with the FireBase backend
 * 
 * @author Valencino Tan
 */



function getCurrentDate(){
    const time = new Date();
    return time.toDateString();
}

/**
 * Takes data {food_name, calorie} and email to update the database
 * 
 * @param  data 
 * @param  email 
 * 
 */

export async function addCalorieData(data,email) {
    if (email === undefined){
        return "Error!"
    }
    const docref = doc(db,`calorie_records/${email}/calorie_record_${getCurrentDate()}`,Timestamp.now().toDate().toISOString())
    try{
        await setDoc(docref,data)
        return "Success"
    }
    catch (err){
        console.log(err)
        return "Error!"
    }
}
/**
 * Queries calorie data from the database
 * 
 * @param  email 
 * @returns Snapshot of the document queried
 */
export async function getCalorieData(email){
    if(email === undefined){
        return "Error!"
    }
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
