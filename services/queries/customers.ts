import { getTokenFromCookies } from "../../utils/cookies";
import { endPoints } from "./endPoints";

export async function getCustomerbyId(id: number) {
const tokenFromCookies = getTokenFromCookies();
if (!tokenFromCookies) {
    throw new Error('Token not found in cookies');
  }
    // Set the Authorization header with the token
    const headers = {
        Authorization: `Bearer ${tokenFromCookies}`
      };
      
const response = await fetch(`${endPoints.customers.profile(id)}`, {
    method: 'GET',
    headers: headers
  });
 const data = await response.json();
 return data;
}