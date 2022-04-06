import dynamic from 'next/dynamic';

import IndexServer from './index-server';

const View = dynamic(() => import('./index'), {
    ssr: false,
    loading: IndexServer,
});

export default View;
