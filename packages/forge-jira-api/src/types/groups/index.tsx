export type Group = {
    name: string; // e.g. 'jira-administrators';
    groupId: string; // e.g. '276f955c-63d7-42c8-9520-92d01dca0625';
};

export type GroupPickerResult = {
    groups: {
        name: string; // 'jdog-developers'
        groupId: string; // '276f955c-63d7-42c8-9520-92d01dca0625'
        html: string; // '<b>j</b>dog-developers'
    }[];
    total: number; // 25;
    header: string; // 'Showing 20 of 25 matching groups';
};
