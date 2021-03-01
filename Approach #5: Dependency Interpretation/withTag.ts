export type WithTag<Tag extends string, ToBeTagged> = {
    _tag: Tag;
    value: ToBeTagged;
};

export const withTag = <Tag>(tag: Tag) => <Value>(value: Value) => ({
    _tag: tag,
    value,
});
