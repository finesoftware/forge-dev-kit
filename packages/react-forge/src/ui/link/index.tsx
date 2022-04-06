import { ReactNode } from 'react';

import { css } from '@emotion/core';

import { createClickHandler } from '../common';

const plainLinkCss = css`
    display: block;
    color: inherit;

    &:focus {
        outline: none;
        text-decoration: inherit;
    }

    &:hover,
    &:active {
        color: inherit;
        text-decoration: inherit;
    }
`;

type Props = {
    href: string;
    target?: '_blank';
    appearance?: 'plain';
    children: ReactNode;
    className?: string;
};

export const Link = ({ href, target, appearance, children, className }: Props) => (
    <a
        href={href}
        target={target}
        onClick={createClickHandler({ href, target })}
        css={[appearance === 'plain' && plainLinkCss]}
        className={className}
    >
        {children}
    </a>
);
