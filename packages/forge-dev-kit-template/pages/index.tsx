import { ForgeContainer, useContextSafe } from '@finesoftware/react-forge';

import View from '../src';

const Content = () => {
    const context = useContextSafe();

    if (context) {
        return <View />;
    }

    return <div>Loading...</div>;
};

const Index = () => (
    <ForgeContainer>
        <Content />
    </ForgeContainer>
);

export default Index;
