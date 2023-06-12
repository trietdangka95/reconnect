export const APX_LIST_FILE = [
  {
    Type: 'ProofOfAssetOwnership',
    Title: 'proof_of_asset_ownership',
    HasTooltip: true,
    TooltipContent: 'proof_of_asset_ownership_tooltip',
    required: true,
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'GridInterConnectionReport',
    Title: 'grid_interconnection_report',
    HasTooltip: true,
    TooltipContent: 'relevant_document_tooltip_content',
    required: true,
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'CommissioningReport',
    Title: 'commissioning_report',
    HasTooltip: true,
    TooltipContent: 'commissioning_report_tooltip',
    required: true,
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'MeterOrInverterInformation',
    Title: 'meter_inverter_information',
    HasTooltip: true,
    TooltipContent: 'meter_inverter_information_tooltip',
    required: true,
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'ApxForm',
    Title: 'apx_form',
    HasTooltip: false,
    TooltipContent: '',
    required: true,
    HasTemplate: true
  },
  {
    Type: 'LetterOfConfirmation',
    Title: 'letter_of_confirmation',
    HasTooltip: false,
    TooltipContent: '',
    required: true,
    HasTemplate: true
  },
  {
    Type: 'LetterOfAssetAuthorization',
    Title: 'letter_of_asset_authorization',
    HasTooltip: false,
    TooltipContent: '',
    required: false,
    HasTemplate: true
  }
];

export const APX_IREC_TYPE_FILE = {
  PROOF_ASSET: 'ProofOfAssetOwnership',
  GRID_INTER_CONNECTION: 'GridInterConnectionReport',
  COMISSION_REPORT: 'CommissioningReport',
  METER_INVERTER: 'MeterOrInverterInformation',
  APX_FORM: 'ApxForm',
  LETTER_OF_CONFIRMATION: 'LetterOfConfirmation',
  LETTER_OF_ASSET_AUTHORIZATION: 'LetterOfAssetAuthorization',
  PHOTO_ASSET: 'PhotoAsset',
  OTHER_DOCUMENTS: 'OtherRelevantDocuments',
  AGGREGATED_DOCUMENT: 'AggregatedDocument'
};

export const IREC_ASSET_TYPE_FILE = {
  DEVICE_REGISTRATION: 'DeviceRegistrationApplicationForm',
  OWNER_DECLARATION: 'OwnerDeclarationLetter',
  SAMPLE_METERING: 'SampleMeteringEvidence',
  SINGLE_LINE_DIAGRAM: 'SingleLineDiagram',
  POWER_PURCHASE: 'PowerPurchaseAgreement',
  PHOTO_ASSET: 'PhotoAsset',
  OTHER_DOCUMENTS: 'OtherRelevantDocuments'
};

export const IREC_LIST_FILE = [
  {
    Type: 'DeviceRegistrationApplicationForm',
    Title: 'completed_device_registration_application_form',
    HasTooltip: true,
    TooltipContent: 'completed_device_registration_tooltip',
    HasTemplate: true
  },
  {
    Type: 'OwnerDeclarationLetter',
    Title: 'owner_declaration_letter',
    HasTooltip: true,
    TooltipContent: 'owner_declaration_letter_tooltip',
    HasTemplate: true
  },
  {
    Type: 'SampleMeteringEvidence',
    Title: 'sample_metering_evidence',
    HasTooltip: true,
    TooltipContent: 'sample_metering_evidence_tooltip',
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'SingleLineDiagram',
    Title: 'single_line_diagram',
    HasTooltip: true,
    TooltipContent: 'single_line_diagram_tooltip',
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'PowerPurchaseAgreement',
    Title: 'power_purchase_agreements',
    HasTooltip: true,
    TooltipContent: 'power_purchase_agreements_tooltip',
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  },
  {
    Type: 'IrecCommissioningInterconnection',
    Title: 'irec_commissioning_interconnection',
    HasTooltip: true,
    TooltipContent: 'irec_commissioning_interconnection_tooltip',
    HasTemplate: true,
    templateDownloadText: 'download_sample'
  }
];

export const STATUS = {
  DRAFT: 'Draft',
  PENDING: 'Pending',
  RETURNED: 'Returned',
  REJECTED: 'Rejected',
  VERIFIED: 'Verified',
  APPROVED: 'Approved',
  SUBMITTED: 'Submitted',
  RE_SUBMITED: 'ReSubmitted',
  REJECTED_BY_IREC: 'Rejected by I-REC',
  TO_RESUBMIT: 'ToResubmit'
};

export const OPS_ASSET_STATUS = {
  DRAFT: 'Draft',
  NEW: 'New',
  RE_SUBMITTED: 'Resubmitted',
  VERIFIED: 'Verified',
  SUBMITTED: 'Submitted',
  RETURNED: 'Returned',
  REJECT_BY_IREC: 'RejectByIrec',
  REJECTED: 'Rejected',
  APPROVED: 'Approved',
  PENDING: 'Pending'
};

export const ASSET_REGISTRATION_TYPE = {
  IREC: { label: 'I-REC', value: 'IREC' },
  TIGR: { label: 'TIGR', value: 'TIGR' }
};

export const MIN_FILE_UPLOAD = 1;

export const MAX_PERCENTAGE = 100;

export const MAX_LIMIT_OPTION = 100;
