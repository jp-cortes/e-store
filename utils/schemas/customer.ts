
import { z } from 'zod';

 export type SignupValues = z.infer<typeof signUpValuesSchema>
 export type UpdateValues = z.infer<typeof updateValuesSchema>
  type AvatarFileList = any
 
 

export const signUpValuesSchema = z.object({
    name: z.string().min(3).max(20),
    lastName: z.string().min(4).max(20),
    phone: z.string().min(1).max(30),
    user: z.object({
      email: z.string().email(),
      password: z.string().min(8).max(50),
      confirmPassword: z.string()
    })
  })
  .refine((data) => data.user.password === data.user.confirmPassword, {
    message: 'Password do not match',
    path: ['user.confirmPassword'],
  });


export const updateValuesSchema = z.object({
    name: z.string().min(3).max(20),
    lastName: z.string().min(4).max(20),
    phone: z.string().min(1).max(30),
    avatar: z.instanceof(FileList),
  });
  