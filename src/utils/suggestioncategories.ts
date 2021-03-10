import SuggestionCategory from '../types/SuggestionCategory';

const mapCategoriesforSelector = (
  suggestionCategories: SuggestionCategory[]
) => {
  return suggestionCategories.map(category => ({
    value: category.title,
    label: category.description
  }));
};
export default mapCategoriesforSelector;
