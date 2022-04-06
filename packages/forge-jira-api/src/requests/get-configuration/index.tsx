import { request } from '../../common/request';
import { GlobalConfiguration } from '../../types/global-configuration';

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jira-settings/#api-rest-api-3-configuration-get
 */
export const getConfiguration = () => request<GlobalConfiguration>(`/rest/api/3/configuration`);
