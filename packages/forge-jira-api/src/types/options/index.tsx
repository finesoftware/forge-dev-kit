export type Option = {
    id: string | number /* we saw this to be a number, e.g. for tempo fields */;
    value: string;
};

export type CascadingOption = Option & { child?: Option };

export type AllowedCascadingOption = Option & {
    children?: Option[];
};
