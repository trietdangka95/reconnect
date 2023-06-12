import { Currencies } from 'models/PaymentInformation';
import { REGEX } from './FormHelper';

export const BANK_ACCOUNT_TYPE = {
  ACH: 'Aba',
  SWIFT: 'SwiftCode',
  SINGAPORE_LOCAL_BANK: 'SingaporeLocalBank',
  SINGAPORE_PAY_NOW: 'SingaporePayNow'
};

export const ACCOUNT_TYPES = [
  {
    label: 'Checking',
    value: 'Checking'
  },
  {
    label: 'Savings',
    value: 'Savings'
  }
];

export const RECIPIENT_TYPES = [
  {
    label: 'Business',
    value: 'Business'
  },
  {
    label: 'Person',
    value: 'Personal'
  }
];
export const ACCOUNT_TYPE_DESCRIPTION = {
  VERIFIED: 'Verified',
  FAILED: 'Failed'
};

export const CHARGE_BY = {
  PERCENTAGE_OF_TRANSACTION: 'PercentageOfTransaction',
  PER_TRANSACTION: 'PerTransaction'
};

export const PAYMENT_VALIDATION_SET = {
  BANK_NAME: {
    REQUIRED: { MESSAGE: 'required' },
    MIN_LENGTH: {
      VALUE: 2,
      MESSAGE: 'minimum_characters_are_2'
    },
    MAX_LENGTH: {
      VALUE: 255,
      MESSAGE: 'maximum_characters_are_255'
    }
  },
  BANK_ACCOUNT_NAME: {
    REQUIRED: { MESSAGE: 'required' },
    MIN_LENGTH: {
      VALUE: 2,
      MESSAGE: 'minimum_characters_are_2'
    },
    MAX_LENGTH: {
      VALUE: 140,
      MESSAGE: 'maximum_characters_are_140'
    },
    REGEX: {
      VALUE: REGEX.REGEX_BANK_ACCOUNT_NAME,
      MESSAGE: 'bank_account_name_is_incorrect'
    }
  },
  ACH_ROUTING_NUMBER: {
    REQUIRED: { MESSAGE: 'required' },
    REGEX: {
      VALUE: REGEX.REGEX_ACH_ROUTING_NUMBER,
      MESSAGE: 'ach_is_incorrect'
    }
  },
  SWIFT_CODE: {
    REQUIRED: { MESSAGE: 'required' },
    MAX_LENGTH: {
      VALUE: 17,
      MESSAGE: 'maximum_characters_are_17'
    },
    REGEX: {
      VALUE: REGEX.REGEX_SWIFT_CODE,
      MESSAGE: 'swift_code_is_incorrect'
    }
  },
  BANK_ACCOUNT_NUMBER: {
    REQUIRED: { MESSAGE: 'required' },
    MIN_LENGTH: {
      VALUE: 4,
      MESSAGE: 'minimum_characters_are_4'
    },
    ACH: {
      MAX_LENGTH: {
        VALUE: 17,
        MESSAGE: 'maximum_characters_are_17'
      }
    },
    SWIFT_CODE: {
      MAX_LENGTH: { VALUE: 34, MESSAGE: 'maximum_characters_are_34' }
    },

    MIN_LENGTH_FOR_SGD_CURRENCY: {
      VALUE: 4,
      MESSAGE: 'minimum_characters_are_4'
    },
    MAX_LENGTH_FOR_SGD_CURRENCY: {
      VALUE: 34,
      MESSAGE: 'maximum_characters_are_34'
    },
    REGEX: {
      BY_USD_CURRENCY: {
        VALUE: REGEX.REGEX_BANK_ACCOUNT_NUMBER_BY_USD_CURRENCY,
        MESSAGE: 'account_number_is_incorrect'
      },
      BY_SGD_CURRENCY: {
        VALUE: REGEX.REGEX_BANK_ACCOUNT_NUMBER_BY_SGD_CURRENCY,
        MESSAGE: 'account_number_sgd_currency_is_incorrect'
      }
    }
  },
  CITY: {
    REQUIRED: { MESSAGE: 'required' },
    MAX_LENGTH: {
      VALUE: 255,
      MESSAGE: 'maximum_characters_are_255'
    }
  },
  RECIPIENT_ADDRESS: {
    REQUIRED: { MESSAGE: 'required' },
    MAX_LENGTH: {
      VALUE: 255,
      MESSAGE: 'maximum_characters_are_255'
    }
  },
  POSTAL_CODE: {
    REQUIRED: { MESSAGE: 'required' },
    MAX_LENGTH: {
      VALUE: 32,
      MESSAGE: 'maximum_characters_are_32'
    },
    REGEX: {
      VALUE: REGEX.REGEX_POSTAL_CODE,
      MESSAGE: 'post_code_is_incorrect'
    }
  }
};

export const CURRENCY_TYPES = [
  { label: 'USD', value: 'USD', countryCode: 'US' },
  { label: 'SGD', value: 'SGD', countryCode: 'SG' }
];
export const PAYMENT_TYPE_BY_CURRENCY = [
  {
    USD: [
      {
        LocalizeKey: 'ach_routing_number',
        PaymentType: 'Aba'
      },
      { LocalizeKey: 'swift_code', PaymentType: 'SwiftCode' }
    ]
  },
  {
    SGD: [
      {
        LocalizeKey: 'local_bank_account',
        PaymentType: 'SingaporeLocalBank'
      },
      { LocalizeKey: 'pay_now', PaymentType: 'SingaporePayNow' }
    ]
  }
] as Currencies[];

export const COUNTRY_CODE_BY_CURRENCY = {
  US: 'US',
  SG: 'SG'
};
export const CURRENCIES = { USD: 'USD', SGD: 'SGD' };
