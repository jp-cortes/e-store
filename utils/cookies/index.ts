import Cookie  from 'js-cookie';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';


// Function to retrieve the token from cookies
// export function getTokenFromCookies() {
//     const cookieString = document.cookie;
//     const cookies = cookieString.split(';');
//     for (const cookie of cookies) {
//       const [name, value] = cookie.split('=');
//       if (name.trim() === 'token') {
//         return value.trim();
//       }
//     }
//     return null;
//   }

export function validateToken(router: AppRouterInstance, route: string, route2: string) {
    const token = Cookie.get('token');
  
    if(!token) {
      console.log('no token');
      return router.push(route);
    } else {
      console.log('there is token');
      return router.push(route2);
    }
  }