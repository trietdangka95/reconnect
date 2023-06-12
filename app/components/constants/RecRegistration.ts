export const APX_REC_LIST_FILE = [
  {
    Type: 'GenerationData',
    Title: 'Generation Data',
    HasTooltip: true,
    TooltipContent:
      'Generation data can be provided in the form of utility bills, EMS data or invoices showing electricity generation.',
    required: true
  }
];

export const RECS_STATUS = {
  DRAFT: 'Draft',
  NEW: 'New',
  VERIFIED: 'Verified',
  SUBMITTED: 'Submitted',
  RESUBMITTED: 'Resubmitted',
  RETURNED: 'Returned',
  REJECTED: 'Rejected',
  APPROVED: 'Approved'
};

export const APX_IREC_TYPE_FILE = {
  RECS_APPLICATION: 'RecsApplication',
  OPS_RECS_APPLICATION: 'OpsRecsApplication'
};

export const STATUS = {
  DRAFT: 'Draft',
  NEW: 'New'
};

export const REC_REGISTRATION_TYPE = {
  IREC: { label: 'I-REC', value: 'IREC' },
  TIGR: { label: 'TIGR', value: 'TIGR' }
};
