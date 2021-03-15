import CategorySelectOption from './CategorySelectOption';
import AmountSelectOption from './AmountSelectOption';

type CategorySelectorProps = {
  categoryOptions: categorySelectOption[];
  amountOptions: AmountSelectOption[];
  onSubmitHandler: () => {};
  onResetHandler: () => {};
};

export default CategorySelectorProps;
