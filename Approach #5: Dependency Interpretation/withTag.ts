export type WithTag<Tag extends string, ToBeTagged> = {
    _tag: Tag;
    taggedValue: ToBeTagged;
};

export const withTag = <Tag>(tag: Tag) => <Value>(taggedValue: Value) => ({
    _tag: tag,
    taggedValue,
});
