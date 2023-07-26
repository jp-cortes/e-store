import Cookie from "js-cookie";
import { endPoints } from "./endPoints";

export async function loginUser(email: string, password: string) {
  
    const response = await fetch(`${endPoints.users.login}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const data = await response.json();
      const token = data.token;
      const userId = data.user.id;
      const userRole = data.user.role;
      
      Cookie.set('token', token, { expires: 5 })
      Cookie.set('userId', userId, { expires: 5 })
      Cookie.set('userRole', userRole, { expires: 5 })
    
      return data;
}


export async function sendRecoveryEmail(email: string) {
  
    const response = await fetch(`${endPoints.users.resetPassword}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          email: email,
        })
      })
      const data = await response.json();
      return data;
}


