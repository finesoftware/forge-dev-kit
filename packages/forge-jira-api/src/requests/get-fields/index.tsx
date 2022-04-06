import { request } from '../../common/request';
import { Field } from '../../types/fields';

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-rest-api-3-field-get
 */
export const getFields = () => request<Field[]>('/rest/api/3/field');
