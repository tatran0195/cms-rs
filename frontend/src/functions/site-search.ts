import { getData } from '@/hooks/api/client-helpers';
import type { SearchAnswer } from '@/hooks/api/types';
import { api } from '@/services/api';

export const searchSiteFn = async ({
  data,
}: {
  data: { projectId: string; query: string; language?: string; version?: string; limit?: number };
}) => {
  const result = await getData<any>(
    await api.public.sites[':id'].search.$get({
      param: { id: data.projectId },
      query: {
        q: data.query,
        ...(data.limit ? { limit: String(data.limit) } : {}),
        ...(data.language ? { lang: data.language } : {}),
        ...(data.version ? { version: data.version } : {}),
      },
    }),
    'search',
  );
  return result?.hits ?? [];
};

export const answerSiteFn = async ({
  data,
}: {
  data: { projectId: string; query: string; language?: string; version?: string };
}): Promise<SearchAnswer> =>
  getData<SearchAnswer>(
    await api.public.sites[':id'].answer.$post({
      param: { id: data.projectId },
      json: {
        q: data.query,
        ...(data.language ? { lang: data.language } : {}),
        ...(data.version ? { version: data.version } : {}),
      },
    }),
    'answer',
  );
