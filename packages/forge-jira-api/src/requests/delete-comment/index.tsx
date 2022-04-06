import { request } from '../../common/request';

type Args = {
    issueKeyOrId: string | number;
    commentId: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-id-delete
 */
export const deleteComment = async ({ issueKeyOrId, commentId }: Args) =>
    request<void>(`/rest/api/3/issue/${issueKeyOrId}/comment/${commentId}`, {
        type: 'DELETE',
    });
