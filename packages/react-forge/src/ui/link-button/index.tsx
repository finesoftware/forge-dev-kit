import { ComponentPropsWithRef } from 'react';

import Button from '@atlaskit/button/standard-button';

import { createClickHandler } from '../common';

type Props = Omit<ComponentPropsWithRef<typeof Button>, 'onClick'> & {
    href: string;
};

export const LinkButton = (props: Props) => {
    const { href, target } = props;
    return (
        <Button
            onClick={createClickHandler({
                href,
                target: target === '_blank' ? '_blank' : undefined,
            })}
            {...props}
        />
    );
};
