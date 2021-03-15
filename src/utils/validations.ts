import { RequiredFieldError, MaxSuggestionAmountError } from './error';
import { fillInStrTemplate } from './strtemplate';

import { maxSuggestionAmount } from '../vars/constants';

import { msgRequiredField, msgMaxSuggestionAmount } from '../vars/messages';

const validateGeneratorInput = (category: string, amount: number) => {
  if (!category || !amount)
    throw new RequiredFieldError(
      fillInStrTemplate(msgRequiredField, [
        { param: 'fields', value: 'category and amount' }
      ])
    );
  if (amount > maxSuggestionAmount)
    throw new MaxSuggestionAmountError(
      fillInStrTemplate(msgMaxSuggestionAmount, [
        { param: 'amount', value: maxSuggestionAmount }
      ])
    );
};

export { validateGeneratorInput };
