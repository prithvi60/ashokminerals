import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc) {
  title,
  slug,
  blogShortRead,
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  "plainBody": body[].children[].text
}`;


export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  body[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`

export const PRODUCTS_QUERY = groq`
*[_type == "products"]|order(publishedAt asc) {
  title,
  slug,
  summary,
  market[]->|order(title asc){
    _id,
    title
  },
  publishedAt,
  blockContent,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt
}`;

export const PRODUCT_QUERY = groq`
*[_type == "products" && slug.current == $productName][0] {
  title,
  market,
  "imageUrl": productImage.asset->url,
  "imageAlt": productImage.alt,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`

export const MARKETS_QUERY = groq`
*[_type == "market"]|order(title asc) {
  _id,
  title,
}`;