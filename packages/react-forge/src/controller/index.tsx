// eslint-disable-next-line import/no-unresolved
import { view } from '@forge/bridge';
import { createContainer, createStateHook, createStore, StoreActionApi } from 'react-sweet-state';

type Context = {
    accountId: string;
    cloudId: string;
    localId: string;
    moduleKey: string;
    extension: unknown;
    locale: string;
    siteUrl: string;
    timezone: string;
};

type State = {
    context: Context | undefined;
};

type StoreAPI = StoreActionApi<State>;

const initialState = {
    context: undefined,
};

const actions = {};

const Store = createStore<State, typeof actions>({ initialState, actions });

export const ForgeContainer = createContainer<State, typeof actions>(Store, {
    onInit:
        () =>
        async ({ setState }: StoreAPI) => {
            const context = await view.getContext();
            setState({ context: context as Context });
        },
});

const useContextInternal = createStateHook(Store);

export const useContextSafe = () => {
    const { context } = useContextInternal();
    return context;
};

export const useContext = () => {
    const { context } = useContextInternal();
    if (!context) {
        throw new Error('Context not yet available');
    }
    return context;
};
