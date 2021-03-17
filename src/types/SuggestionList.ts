import GenericStringObject from './GenericStringObject';
import SuggestionPictureProps from './SuggestionPictureProps';

type SuggestionList = {
  categoryTitle: string;
  categoryContentType: string;
  suggestions: GenericStringObject[] | SuggestionPictureProps[];
};

export default SuggestionList;
