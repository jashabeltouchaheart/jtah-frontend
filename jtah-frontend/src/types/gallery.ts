// mirrors schemaTypes/galleryImage.ts (keep in sync if the schema changes)
export interface GalleryImage {
  _id: string;
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt: string;
  };
  caption?: string;
}
