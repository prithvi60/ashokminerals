import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
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
            name: "blogShortRead",
            type: "text",
            title: "Blog Short Read",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Blog Post Image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
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
                                fields: [
                                    {
                                        name: "product",
                                        title: "Product",
                                        type: "reference",
                                        to: [{ type: "products" }],
                                    },
                                ],
                            },
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                    }
                                ]
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
                            title: "Alternative text",
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
