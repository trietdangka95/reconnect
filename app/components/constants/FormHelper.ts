export const REGEX = {
  REGEX_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  REGEX_USERNAME: /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,16}$/,
  REGEX_PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^\&*\)\(\-+=._{}\[\]\\\|:;'",<>?/`~])[A-Za-z\d!@#\$%\^\&*\)\(\-+=._{}\[\]\\\|:;'",<>?/`~]{8,64}$/,
  REGEX_OTP: /[^A-Za-z0-9]+/g,
  REGEX_LAT:
    /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
  REGEX_LONG:
    /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
  REGEX_NUMBER: /^[0-9]*$/,
  REGEX_PHONE_NUMBER: /^\+?[0-9]*$/,
  REGEX_WEBSITE:
    /^(https?:\/\/)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/,
  REGEX_BANK_ACCOUNT_NAME:
    /^[0-9A-Za-zÀ-ÖØ-öø-ÿ-_()'*,.%#^@{}~<>+$\"\[\]\\ ]+$/,
  REGEX_ACH_ROUTING_NUMBER: /^\d{9}$/,
  REGEX_SWIFT_CODE: /^[a-zA-Z]{6}(([a-zA-Z0-9]{2})|([a-zA-Z0-9]{5}))$/,
  REGEX_BANK_ACCOUNT_NUMBER_BY_USD_CURRENCY: /^[a-zA-Z0-9 ]*$/,
  REGEX_BANK_ACCOUNT_NUMBER_BY_SGD_CURRENCY: /^[a-zA-Z0-9+ ]*$/,
  REGEX_POSTAL_CODE: /^[a-zA-Z0-9]*$/,
  REGEX_EMOTICON: /\p{Extended_Pictographic}/u
};

export const TYPE_FILE = {
  ACRA: 'CompanyRegistrationDocument',
  LETTER_OF_AUTHORIZATION: 'LetterOfAuthorization',
  KYC: 'Kyc',
  AML: 'Aml',
  FEE_ARGEEMENT: 'FeeAgreement',
  SALE_ARGREEMENT: 'SaleAgreement',
  RECS_LISTING: 'RecsListing',
  INVOICE_DOCUMENT: 'InvoiceDocument',
  RETIREMENT_APPLICATION: 'RetirementApplication',
  BANK_STATEMENT: 'BankStatement',
  FEE_CODE_DOCUMENT: 'FeeCodeDocument'
};

export const STATUS = {
  RESUBMIT: 'Resubmit',
  REJECT: 'Reject',
  INPROGRESS: 'In Progress',
  APPROVE: 'Approve',
  WAITING_FOR_CONFIRM: 'Waiting For Confirm',
  ASSIGN_TO_HEAD: 'AssignedToHead',
  ASSIGN_TO_MANAGER: 'AssignedToManager',
  SENT_INVITATION: 'SendInvitation',
  PRE_SENT_INVITATION: 'PreInvitation',
  WALKIN: 'WalkIn',
  REVIEW: 'Review'
};

export const REGISTRY = {
  IREC: 'IREC',
  TIGR: 'TIGR'
};
export const WAITING_TO_CONFIRM = 'Waiting To Confirm';
export const WAITING_FOR_CONFIRM = 'WaitingForConfirm';
export const FILE_SIZE_25MB = 25000000;
export const FILE_SIZE_20MB = 20000000;
export const LIMITED_FILE = 5;
export const IMAGE_TYPE_ACCEPTED = '.pdf,.jpg,.jpeg,.png';
export const CSV_TYPE_ACCEPTED = '.csv, .xlsx, .xls';
export const ONLY_CSV_TYPE_ACCEPTED = '.csv';
export const XLS_TYPE_ACCEPTED = '.xlsx, .xls';
export const DOC_TYPE_ACCEPTED = '.doc, .docx';
export const PDF_DOC_TYPE_ACCEPTED = '.doc, .docx, .pdf';
export const POWER_POINT_TYPE_ACCEPTED = '.ppt, .pptx';
export const TEXT_TYPE_ACCEPTED = '.txt';
export const ALL_TYPES_ACCEPTED =
  '.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .jpg, .jpeg, .png, .csv';
export const ALL_TYPES_ACCEPTED_EXCLUDE_CSV =
  '.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .jpg, .jpeg, .png';
export const MAX_LIMIT_CAPACITY = 1000000;
export const MAX_LIMIT_QUANLITY = 9999999;
export const MAX_LIMIT_PERIOD = 1000000;
export const MAX_FACTOR_CAPACITY = 100;
export const DEFAULT_EPOCH_TIME = '01/01/1970';
export const MAX_VARIATIONS = 5;
export const MAX_SELL_ORDERS = 5;
export const MAX_SELL_UNIT_PRICE = 1000;
export const MIN_SELL_UNIT_PRICE = 0.01;
export const LIMIT_DATE_INPUT = '9999-12-31';
export const NOTIFICATIONS_POLLING_TIMES = 300000;
export const SIX_DECIMAL_PLACES = 6;
export const THREE_DECIMAL_PLACES = 3;
export const TWO_DECIMAL_PLACES = 2;
export const MAX_LENGTH_20_CHARACTERS = 20;
export const MAX_LENGTH_30_CHARACTERS = 30;
export const MAX_LENGTH_100_CHARACTERS = 100;
export const MAX_LENGTH_150_CHARACTERS = 150;
export const MAX_LENGTH_250_CHARACTERS = 250;
export const MAX_LENGTH_255_CHARACTERS = 255;
export const TWENTY_FOUR_HOURS = 24;
export const DAY_OF_NORMAL_YEAR = 365;
export const PHASE = [
  {
    Phase: 'PhaseZero',
    PhaseName: 'Phase 0',
    Status: 'PreInvitation',
    Content: 'Pre-sent Invitation',
    Localize: 'phase0'
  },
  {
    Phase: 'PhaseOne',
    PhaseName: 'Phase 1',
    Status: 'WaitingForConfirm',
    Content: 'Waiting for Confirm',
    Localize: 'phase1'
  },
  {
    Phase: 'PhaseTwo',
    PhaseName: 'Phase 2',
    Status: 'WalkIn',
    Content: 'Walkin',
    Localize: 'phase2'
  },
  {
    Phase: 'PhaseThree',
    PhaseName: 'Phase 3',
    Status: 'AssignedToHead',
    Content: 'Assigned to Head of Sales',
    Localize: 'phase3'
  },
  {
    Phase: 'PhaseFour',
    PhaseName: 'Phase 4',
    Status: 'AssignedToAccountManager',
    Content: 'Assigned to Account Manager',
    Localize: 'phase4'
  },
  {
    Phase: 'PhaseFive',
    PhaseName: 'Phase 5',
    Status: 'Review',
    Content: 'Review by Ops Admin',
    Localize: 'phase5'
  },
  {
    Phase: 'PhaseFivePointOne',
    PhaseName: 'Phase 5.1',
    Status: 'Resubmit',
    Content: 'Re-submit by Client',
    Localize: 'phase51'
  },
  {
    Phase: 'PhaseSix',
    PhaseName: 'Phase 6',
    Status: 'Approve',
    Content: "Approve => Create Business Account, can't be revert",
    Localize: 'phase6'
  },
  {
    Phase: 'PhaseSeven',
    PhaseName: 'Phase 7',
    Status: 'Reject',
    Content: "Reject => can't be revert",
    Localize: 'phase7'
  }
];
