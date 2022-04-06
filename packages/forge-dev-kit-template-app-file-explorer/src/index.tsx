import type { Attachment, Issue } from '@finesoftware/forge-jira-api';
import { useIssues, useProjectContext } from '@finesoftware/react-forge-jira';

import { AttachmentCard } from './attachment-card';

export default () => {
    const { project } = useProjectContext();

    const { data: issues } = useIssues({
        jql: `project = ${project.key} and attachments IS NOT EMPTY ORDER BY updatedDate`,
        fields: ['attachment', 'summary'],
    });

    if (!issues) {
        return <div>Loading...</div>;
    }

    // extract attachments
    const attachments: { attachment: Attachment; issue: Issue }[] = [];
    issues.issues.forEach((issue) => {
        issue.fields?.attachment?.forEach((attachment) => {
            attachments.push({ attachment, issue });
        });
    });

    return (
        <>
            {attachments.map(({ attachment, issue }) => (
                <AttachmentCard key={attachment.id} attachment={attachment} issue={issue} />
            ))}
        </>
    );
};
