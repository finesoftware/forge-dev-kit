export type StatusCategory = {
    colorName: string;
    id: number;
    key: 'new' | 'indeterminate' | 'done' | 'undefined';
    name: string;
};

export type Status = {
    description: string;
    iconUrl: string;
    id: string;
    name: string;
    statusCategory: StatusCategory;
};

export type Transition = {
    id: string;
    name: string;
    hasScreen: boolean;
    to: Status;
};

export type Resolution = {
    description: string;
    id: string;
    name: string;
};
