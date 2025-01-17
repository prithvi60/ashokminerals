import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ProductsType = defineType({
    name: "products",
    title: "Products",
    type: "document",
    icon: DocumentTextIcon,
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
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 50,
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "_"),
            },
        }),
        defineField({
            name: "mainImage",
            type: "image",
            title: "Isometric View Image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        }),
        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "productImage",
            type: "image",
            title: "Product Image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        }),
        defineField({
            title: "Block Content",
            name: "blockContent",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "market",
            type: "array",
            title: "Market",
            of: [{ type: "string" }]
        }),
    ],
});
