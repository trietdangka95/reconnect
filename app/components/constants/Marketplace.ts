import { ItemOptionDTO } from 'models/MetaData';

export const SOURCE_CURRENCY_OPTION = {
  label: 'USD',
  value: 'USD'
};

export const TARGET_CURRENCY_OPTION = [
  {
    label: 'CNY',
    value: 'CNY'
  },
  {
    label: 'EUR',
    value: 'EUR'
  },
  {
    label: 'SGD',
    value: 'SGD'
  }
] as ItemOptionDTO[] | null;
