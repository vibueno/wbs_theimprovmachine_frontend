import SuggestionCategory from '../types/SuggestionCategory';

const mapCategoriesforSelector = (
  suggestionCategories: SuggestionCategory[]
) => {
  return suggestionCategories.map(category => ({
    value: category.name,
    label: category.title
  }));
};
export default mapCategoriesforSelector;
