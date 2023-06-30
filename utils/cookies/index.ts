import Cookie  from 'js-cookie';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';


export function validateToken(router: AppRouterInstance, route: string, route2: string) {
    const token = Cookie.get('token');
  
    if(!token) {
      // console.log('no token');
      return router.push(route);
    } else {
      // console.log('there is token');
      return router.push(route2);
    }
  }

export function validateUserId() {
    const userId = Cookie.get('userId');
  
    if(!userId) {
      console.log('no id');
      return null
    } 

    return userId;
  }