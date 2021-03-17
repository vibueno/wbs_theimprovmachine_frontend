import CategorySelectOption from './CategorySelectOption';
import AmountSelectOption from './AmountSelectOption';

type CategorySelectorProps = {
  categoryOptions: categorySelectOption[];
  amountOptions: AmountSelectOption[];
  onSubmitHandler: Function;
  onResetHandler: Function;
};

export default CategorySelectorProps;
