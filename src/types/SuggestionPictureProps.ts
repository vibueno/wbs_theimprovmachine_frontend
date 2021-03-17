type SuggestionPictureProps = {
  id: number;
  url: string;
  description: string;
  imagepage?: string;
  authorname?: string;
  authorpage?: string;
  onLoadHandler: (id: number, loading: boolean) => void;
};

export default SuggestionPictureProps;
