import MarketCheckboxInput from "@/components/MarketCheckboxInput";
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
            title: "Markets",
            description: "Select applicable markets for this product",
            of: [{
                type: "reference",
                to: [{ type: "market" }]
            }],
            components: {
                input: MarketCheckboxInput
            },
            validation: (Rule) => Rule.required().min(1).error('Select at least one market')
        }),
    ],
    preview: {
        select: {
            title: 'title',
            markets: 'market'
        },
        prepare(selection) {
            const { title, markets = [] } = selection;
            return {
                title: title,
                subtitle: `Markets: ${markets.length}`
            };
        }
    }
});
