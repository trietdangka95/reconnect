export enum PolicyTemplateType {
  LetterOfAuthorization = 'LetterOfAuthorization',
  ApxForm = 'ApxForm',
  LetterOfAssetAuthorization = 'LetterOfAssetAuthorization',
  LetterOfConfirmation = 'LetterOfConfirmation',
  TermsAndConditions = 'TermsAndConditions',
  PrivacyPolicy = 'PrivacyPolicy',
  KycAndAml = 'KycAndAml',
  Psa = 'Psa',
  GenerationData = 'GenerationData',
  UserGuide = 'UserGuide',
  IrecGenerationData = 'IrecGenerationData',
  TigrGenerationData = 'TigrGenerationData',
  UserGuideAfterLogin = 'UserGuideAfterLogin',
  PhotoOfMeterReading = 'PhotoOfMeterReading',
  ExportDataFromEnergyManagementSystem = 'ExportDataFromEnergyManagementSystem',
  UtilityBill = 'UtilityBill',
  IrecIssuingDeclaration = 'IrecIssuingDeclaration',
  IssuanceRequestForm = 'IssuanceRequestForm'
}

export enum Status {
  //GRAY
  Draft = 'Draft',
  New = 'New',

  //BLUE
  InProgress = 'InProgress',
  ToResubmit = 'ToResubmit',
  Submitted = 'Submitted',
  Sending = 'Sending',
  Resubmit = 'Resubmit',
  Resubmitted = 'Resubmitted',
  Verified = 'Verified',
  Review = 'Review',
  AssignedToHead = 'AssignedToHead',
  AssignedToManager = 'AssignedToManager',

  //YELLOW
  WaitingForConfirm = 'WaitingForConfirm',
  WaitingForPayment = 'WaitingForPayment',
  WaitingForApprove = 'WaitingForApprove',
  Pending = 'Pending',
  Unpaid = 'Unpaid',

  //ORANGE
  Returned = 'Returned',
  Refunded = 'Refunded',

  //RED
  RejectByIrec = 'RejectByIrec',
  Cancelled = 'Cancelled',
  Expired = 'Expired',
  Reject = 'Reject',
  Rejected = 'Rejected',
  Declined = 'Declined',
  PaidFail = 'PaidFail',

  //GREEN
  Approve = 'Approve',
  Approved = 'Approved',
  Completed = 'Completed',
  Paid = 'Paid'
}
