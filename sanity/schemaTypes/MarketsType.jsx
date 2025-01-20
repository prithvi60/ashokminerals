import { DocumentSheetIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const MarketsType = defineType({
    name: "market",
    title: "Market",
    type: "document",
    icon: DocumentSheetIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Market Name",
            validation: (rule) => rule.required(),
        }),
    ],
});
