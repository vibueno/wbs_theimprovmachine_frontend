import SuggestionCategory from '../types/SuggestionCategory';
import GenericStringObject from '../types/GenericStringObject';
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
  suggestions: GenericStringObject[]
): SuggestionList => {
  const suggestionList = {
    categoryTitle: categoryObject.title,
    categoryContentType: categoryObject.contenttype,
    suggestions: suggestions
  };
  return suggestionList;
};

export {
  mapCategoriesforSelector,
  getSuggestionAmountList,
  createSuggestionObject
};
