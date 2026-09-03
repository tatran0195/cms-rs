import { kyClient } from '@/services/api-client';

export const getSessionFn = async () => {
  try {
    return await kyClient.get('auth/me').json<any>();
  } catch {
    return null;
  }
};
