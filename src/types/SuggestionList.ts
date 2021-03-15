type SuggestionList = {
  categoryTitle: string;
  categoryContentType: string;
  suggestions: { [key: string]: string[] };
};

export default SuggestionList;
