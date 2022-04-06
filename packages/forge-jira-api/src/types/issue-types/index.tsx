export type IssueType = {
    id: string;
    name: string;
    description: string;
    avatarId?: number;
    iconUrl: string;
    subtask: boolean;
    hierarchyLevel: number;

    // available only for cloud/next-gen
    scope?: { type: 'PROJECT'; project: { id: string } };
};
