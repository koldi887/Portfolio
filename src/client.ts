import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)