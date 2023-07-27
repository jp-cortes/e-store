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
      
      //cookies
      const in30Minutes = 1/48
      Cookie.set('token', token, { expires: in30Minutes })
      Cookie.set('userId', userId, { expires: in30Minutes })
      Cookie.set('userRole', userRole, { expires: in30Minutes })
    
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


