import type { AppRouter } from '@repo/api';
import { createTRPCReact } from '@trpc/react-query';

export const clientApi = createTRPCReact<AppRouter>();
