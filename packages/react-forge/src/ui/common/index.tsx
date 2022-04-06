import { MouseEvent } from 'react';

// eslint-disable-next-line import/no-unresolved
import { router } from '@forge/bridge';

export const createClickHandler =
    ({ href, target }: { href: string; target?: '_blank' }) =>
    (e: MouseEvent) => {
        if (!e.metaKey) {
            e.preventDefault();
            if (target === '_blank') {
                router.open(href);
            } else {
                router.navigate(href);
            }
        }
    };
