import { request } from '../../common/request';
import { IssueSearchResult } from '../../types/issues';

type Args = {
    jql: string;
    startAt?: number;
    maxResults?: number;
    includeEditMeta?: boolean;
    includeTransitions?: boolean;
    includeChangelog?: boolean;
    fields?: string[];
    properties?: string[];
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-post
 */
export const searchIssues = ({
    jql,
    startAt,
    maxResults,
    includeEditMeta,
    includeTransitions,
    includeChangelog,
    fields,
    properties,
}: Args) =>
    request<IssueSearchResult>(`/rest/api/3/search`, {
        type: 'POST',
        data: {
            jql,
            startAt,
            maxResults,
            expand: [
                ...(includeEditMeta ? ['editmeta'] : []),
                ...(includeTransitions ? ['transitions'] : []),
                ...(includeChangelog ? ['changelog'] : []),
            ],
            fields,
            properties,
        },
    });
