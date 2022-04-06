import type { JsonObject } from 'type-fest';

import { request } from '../../common/request';
import { Comment } from '../../types/comments';
import { DocNode } from '../../types/doc-nodes';

type Args = {
    issueKeyOrId: string | number;
    body: DocNode;
    properties?: { key: string; value: JsonObject }[];
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-post
 */
export const addComment = async ({ issueKeyOrId, body, properties }: Args) =>
    request<Comment>(`/rest/api/3/issue/${issueKeyOrId}/comment`, {
        type: 'POST',
        data: { body, properties },
    });
