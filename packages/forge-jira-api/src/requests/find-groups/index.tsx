import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { GroupPickerResult } from '../../types/groups';

type Args = {
    query?: string;
    exclude?: string | string[];
    excludeIds?: string | string[];
    maxResults?: number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-groups-picker-get
 */
export const findGroups = (args: Args) =>
    request<GroupPickerResult>(`/rest/api/3/groups/picker?${toSearchParams(args)}`);
