import { schema } from '@/schema';
import { z } from 'zod';

export type FormProps = z.infer<typeof schema>; // Tipagem do meu formulario
