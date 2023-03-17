import { request } from '../../common/request';

type Args = {
    attachmentId: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-attachments/#api-rest-api-3-attachment-id-delete
 */
export const deleteAttachment = async ({ attachmentId }: Args) =>
    request<void>(`/rest/api/3/attachment/${attachmentId}`, {
        type: 'DELETE',
    });
