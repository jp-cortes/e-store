

import { z } from 'zod';

export type CreateProductValues = z.infer<typeof createProductValuesSchema>
export type UpdateProductValues = z.infer<typeof updateProductValuesSchema>
 
 
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const createProductValuesSchema = z.object({
    name: z.string().min(3).max(20),
    price: z.string().min(4).max(20),
    image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
    description: z.string().min(20),
    categoryId: z.number().min(1).max(9)
  })


export const updateProductValuesSchema = z.object({
    name: z.string().min(3).max(20),
    price: z.string().min(4).max(20),
    image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
    description: z.string().min(20),
    categoryId: z.string().min(8).max(50)
  });
  