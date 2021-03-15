type SuggestionPictureProps = {
  id: number;
  url: string;
  description: string;
  imagepage?: string;
  authorname?: string;
  authorpage?: string;
  onLoadHandler: () => {};
};

export default SuggestionPictureProps;
