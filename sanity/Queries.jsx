export const POSTS_QUERY = `
*[_type == "post"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  blogShortRead,
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  "plainBody": body[].children[].text
}`;


export const POST_QUERY = `
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