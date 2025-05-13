import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";
export const MarketListType = defineType({
    name: "markets",
    title: "Markets",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "This will be auto-generated from the title",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/[,\s().:']/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, ""),
            },
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "isometricImage",
            type: "image",
            title: "Market Main Product Image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Product or Alternative text",
                },
            ],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Market Product Image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Product or Alternative text",
                },
            ],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "body",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "productLink",
                                title: "Product Link",
                                type: "object",
                                icon: LinkIcon,
                                fields: [
                                    {
                                        name: "product",
                                        title: "Product",
                                        type: "reference",
                                        to: [{ type: "products" }],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Product or Alternative text",
                        },
                    ],
                    options: {
                        hotspot: true,
                    },
                },
            ],
        }),
    ],
});
