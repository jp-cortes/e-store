
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
      // Cookie.set('token', token, { expires: 5 })
      //  Save the token in a cookie with the expiration date
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour
      document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`;
      document.cookie = `userId=${userId}; expires=${expirationDate.toUTCString()}; path=/;`;
      // localStorage.setItem('E-store-V1-CustomerId', JSON.stringify(data.user.id));//pending to check
     
      return data;
}

 
