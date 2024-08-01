import { z } from 'zod';
export const ResultSchema = z.object({
    success: z.boolean(),
    url: z.string().url().optional(),
    caption: z.string().optional(),
    from: z.string().optional(),
});