import { useContext } from '@finesoftware/react-forge';

type ProjectInformation = {
    id: string;
    key: string;
    type: string;
};

type IssueInformation = {
    id: string;
    key: string;
    type: string;
    typeId: string;
};

type JiraProjectExtension = {
    project: ProjectInformation;
};

type JiraIssueExtension = {
    isNewToIssue: boolean;
    issue: IssueInformation;
    project: ProjectInformation;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isJiraProjectExtension = (val: any): val is JiraProjectExtension =>
    val && val.type === 'jira:projectPage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isJiraIssueExtension = (val: any): val is JiraIssueExtension =>
    val && (val.type === 'jira:issuePanel' || val.type === 'jira:issueActivity');

export const useProjectContext = () => {
    const { extension } = useContext();
    if (isJiraProjectExtension(extension)) {
        return extension;
    }
    throw new Error('Project context not available in module');
};

export const useIssueContext = () => {
    const { extension } = useContext();
    if (isJiraIssueExtension(extension)) {
        return extension;
    }
    throw new Error('Issue context not available in module');
};
