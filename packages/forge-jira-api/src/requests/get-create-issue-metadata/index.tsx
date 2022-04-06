import type { RequireExactlyOne } from 'type-fest';

import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { CreateIssueMetadata } from '../../types/meta';

type Args = RequireExactlyOne<
    {
        projectIds?: string[];
        projectKeys?: string[];
        issueTypeIds: string[];
    },
    'projectIds' | 'projectKeys'
>;

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get
 */
export const getCreateIssueMetadata = ({ projectIds, projectKeys, issueTypeIds }: Args) =>
    request<CreateIssueMetadata>(
        `/rest/api/3/issue/createmeta?${toSearchParams({
            projectIds,
            projectKeys,
            issuetypeIds: issueTypeIds,
            expand: 'projects.issuetypes.fields',
        })}`,
    );
