

import { z } from 'zod';

export type UpdateOrderValues = z.infer<typeof updateOrderValuesSchema>
 
export const updateOrderValuesSchema = z.object({
  orderStatus: z.string().min(3)
  });
  