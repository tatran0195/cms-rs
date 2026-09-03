import { useMutation, useQuery } from '@tanstack/react-query';
import { answerSiteFn, searchSiteFn } from '@/functions/site-search';
import { queryKeys } from './query-keys';

import type { SearchAnswer, SearchResultHit } from './types';

const requireSiteId = (siteId: string | undefined) => {
  if (!siteId) throw new Error('Site ID is required');
  return siteId;
};

export const useSiteSearch = (siteId: string | undefined, query: string, language?: string, version?: string, limit?: number, enabled = true) =>
  useQuery<SearchResultHit[]>({
    queryKey: queryKeys.site.search(siteId ?? '', query, language, version, limit),
    enabled: Boolean(enabled && siteId && query.trim()),
    queryFn: () =>
      searchSiteFn({
        data: {
          projectId: requireSiteId(siteId),
          query,
          ...(language ? { language } : {}),
          ...(version ? { version } : {}),
          ...(limit ? { limit } : {}),
        },
      }),
  });

export const useAnswerSite = () =>
  useMutation<SearchAnswer, Error, { projectId: string; query: string; language?: string; version?: string }>({
    mutationFn: (input: { projectId: string; query: string; language?: string; version?: string }) => answerSiteFn({ data: input }),
  });
