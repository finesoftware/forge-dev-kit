import { css } from '@emotion/core';
import type { Attachment, Issue } from '@finesoftware/forge-jira-api';
import { Link } from '@finesoftware/react-forge';

import { B100, N40, N70, N800 } from '@atlaskit/theme/colors';

const cardCss = css`
    border: 1px solid ${N40};
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 4px;
    &:hover {
        border-color: ${B100};
    }
`;

const metaInformationCss = css`
    font-size: 12px;
    color: ${N70};
    margin-top: 2px;
`;

const highlightCss = css`
    color: ${N800};
`;

export const AttachmentCard = ({ attachment, issue }: { attachment: Attachment; issue: Issue }) => (
    <Link href={`/rest/api/3/attachment/content/${attachment.id}`} appearance="plain">
        <div css={cardCss}>
            <h5>{attachment.filename}</h5>
            <div css={metaInformationCss}>
                <>Uploaded by </>
                <span css={highlightCss}>{attachment.author.displayName}</span>
                <> on </>
                <span css={highlightCss}>{new Date(attachment.created).toLocaleDateString()}</span>
                <> to </>
                <span css={highlightCss}>
                    {issue.key} {issue.fields?.summary}
                </span>
            </div>
        </div>
    </Link>
);
