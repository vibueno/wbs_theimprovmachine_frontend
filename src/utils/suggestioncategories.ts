import SuggestionCategory from '../types/SuggestionCategory';

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

export { mapCategoriesforSelector, getSuggestionAmountList };
