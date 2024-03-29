
import { z } from 'zod';

 export type LoginValues = z.infer<typeof loginValuesSchema>
 export type SignupValues = z.infer<typeof signUpValuesSchema>
 export type UpdateValues = z.infer<typeof updateValuesSchema>
 export type RecoveryEmailValue = z.infer<typeof recoveryEmailSchema>
 export type ResetPasswordValue = z.infer<typeof resetPasswordSchema>
 

 const MAX_FILE_SIZE = 500000;
 const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
 
 export const loginValuesSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50)
 })

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
    avatar: z.any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
  });

  export const recoveryEmailSchema = z.object({
    email: z.string().email()
  })
 
  export const resetPasswordSchema = z.object({

      password: z.string().min(8).max(50),
      confirmPassword: z.string()
   
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });
  