import { z } from 'zod';

export const schema = z.object({
  cardName: z
    .string()
    .min(1, "Can't be blank")
    .max(45, 'To big your field')
    .refine((val) => !/[0-9]/.test(val), 'Place a valid name'),
  cardNumber: z
    .string()
    .min(1, "Can't be blank")
    .length(16, 'Place a valid card number'),
  cardDate: z.object({
    mounth: z
      .string()
      .min(1, "Can't be blank")
      .length(2, 'Place a valid mounth')
      .refine((val) => Number(val) <= 12, 'Place a valid mounth'),
    year: z
      .string()
      .min(1, "Can't be blank")
      .length(2, 'Place a valid date year')
  }),
  cardCvc: z.string().min(1, "Can't be blank").length(3, 'Place a valid cvc')
});
