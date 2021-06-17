import { FormEvent } from 'react';
import CategorySelectOption from './CategorySelectOption';
import AmountSelectOption from './AmountSelectOption';

type CategorySelectorProps = {
  categoryOptions: CategorySelectOption[];
  amountOptions: AmountSelectOption[];
  onSubmitHandler: (e: FormEvent, category: string, amount: number) => void;
  onResetHandler: (
    e: FormEvent,
    categorySelectRef: HTMLFormElement,
    amountSelectRef: HTMLFormElement
  ) => void;
};

export default CategorySelectorProps;
