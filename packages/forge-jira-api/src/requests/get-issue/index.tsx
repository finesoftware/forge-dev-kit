import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Issue } from '../../types/issues';

type Args = {
    issueIdOrKey: string | number;
    includeRenderedFields?: boolean;
    includeEditMeta?: boolean;
    fields?: string[];
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get
 */
export const getIssue = ({
    issueIdOrKey,
    includeRenderedFields,
    includeEditMeta,
    fields,
}: Args) => {
    request<Issue>(
        `/rest/api/3/issue/${issueIdOrKey}?${toSearchParams({
            expand: [
                ...(includeRenderedFields ? ['renderedFields'] : []),
                ...(includeEditMeta ? ['editmeta'] : []),
            ],
            fields,
        })}`,
    );
};
