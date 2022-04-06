import { css } from '@emotion/core';
import { LinkButton } from '@finesoftware/react-forge';

import { Logo } from './logo';

const containerCss = css`
    height: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 32px;
    overflow: auto;
`;

const messageCss = css`
    text-align: center;
`;

const buttonContainerCss = css`
    padding-top: 16px;
`;

export default () => (
    <div css={containerCss}>
        <div css={messageCss}>
            <Logo />
            <h3>Fine Software Forge Dev Kit</h3>
            <p>
                This is your blank Forge Dev Kit module.
                <br />
                There's no telling where you'll go from here.
                <br />
                Not even the sky is the limit for you.
            </p>
            <div css={buttonContainerCss}>
                <LinkButton
                    appearance="primary"
                    href="https://github.com/finesoftware/forge-dev-kit"
                    target="_blank"
                >
                    Read FDK docs
                </LinkButton>
            </div>
            <div css={buttonContainerCss}>
                <LinkButton appearance="link" href="https://jxl.app" target="_blank">
                    Try JXL for Jira
                </LinkButton>
            </div>
        </div>
    </div>
);
