import SuggestionCategory from '../types/SuggestionCategory';
import SuggestionGeneric from '../types/SuggestionGeneric';
import SuggestionList from '../types/SuggestionList';

const mapCategoriesforSelector = (
  suggestionCategories: SuggestionCategory[]
) => {
  return suggestionCategories.map(category => ({
    value: category.name,
    label: category.title
  }));
};

const getSuggestionAmountList = (amount: number) => {
  const list = [];

  for (let i = 1; i <= amount; i++) {
    list.push({
      value: i,
      label: i.toString()
    });
  }
  return list;
};

const createSuggestionObject = (
  categoryObject: SuggestionCategory,
  suggestions: SuggestionGeneric[]
): SuggestionList => {
  const suggestion = {
    category: categoryObject.title,
    contenttype: categoryObject.contenttype,
    suggestions: suggestions
  };
  return suggestion;
};

export {
  mapCategoriesforSelector,
  getSuggestionAmountList,
  createSuggestionObject
};
