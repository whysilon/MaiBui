import axios from "axios";

/**
 * Calls the API to fetch the data depending on the input and function called
 * 
 * @author Valencino Tan
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

/**
 * Sends a GET request to NutritionixAPI search/instant endpoint with
 * param input. Returns Error if input does not return any information. This is usually used
 * to populate search fields
 * 
 * @param input 
 * @returns An array of common food based on input
 */
export default async function GetFoodSearch(input) {
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
/**
 * This sends a POST request to NutritionixAPI to get
 * specific nutritional information based on input.
 * Returns "Error!" if input does not return any information
 * 
 * @param  input 
 * @returns  Array of nutritional information
 */

export const getNutrition = async(input) => {
    const fetchData = async() => { 
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
    return fetchData()
}