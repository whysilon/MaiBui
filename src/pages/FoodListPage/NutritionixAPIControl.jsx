import axios from "axios";

/**
 * Calls the API to fetch the data depending on the input
 * Calls the instant endpoint of NutritionixAPI
 * 
 * 
 * @param {input}
 * @returns FoodList
 * 
 */

const appid = process.env.REACT_APP_API_ID
const api = process.env.REACT_APP_API_KEY
const client = axios.create({
    baseURL: "https://trackapi.nutritionix.com/v2/"
    });

export default async function NutritionixAPIControl(input) {
    const getData = async() => {
        try{
        const data = await client.get('search/instant',{
        params: {
            query : input,
            branded : 'false'
        },
        headers: {
            'x-app-id': appid,
            'x-app-key': api,
            'x-remote-user-id': '0',
        }})
        return data.data.common;
        }
        catch (err){
            console.error(err)
            return "Error"
        }
    }
    return getData()
}

export const getNutrition = async(input) => {
    try {
        const d = await client.post('natural/nutrients', 
        {
        query : input
        },
        {
        headers: {
            'x-app-id': appid,
            'x-app-key': api,
            'x-remote-user-id': '0',
            }  
        }  
    )  
        return d.data.foods[0] 
    }
    catch(err){
        console.error(err)
        return "Error"
    }
}