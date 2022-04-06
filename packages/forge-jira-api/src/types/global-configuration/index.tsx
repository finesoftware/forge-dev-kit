export type GlobalConfiguration = {
    votingEnabled: boolean;
    watchingEnabled: boolean;
    unassignedIssuesAllowed: boolean;
    subTasksEnabled: boolean;
    issueLinkingEnabled: boolean;
    timeTrackingEnabled: boolean;
    attachmentsEnabled: boolean;
    timeTrackingConfiguration: {
        workingHoursPerDay: number;
        workingDaysPerWeek: number;
        timeFormat: 'hours' | 'days' | 'pretty';
        defaultUnit: 'minute' | 'hour' | 'day' | 'week';
    };
};
