
export class Consent implements ConsentData {
  constructor(
    public id?: number,
    public profile?: string,
    public patientName?: string,
    public guardianName?: string,
    public consentMessage?: string,
    public IHereByConfirm?: boolean,
    public idNumber?: string,
    public dateOfConsent?: string,
    public attendedBy?: string,
    public comment?: string,
    public home?: string,
  ) {

  }
}

export interface ConsentData {
  id?: number,
  profile?: string,
  patientName?: string,
  guardianName?: string,
  consentMessage?: string,
  IHereByConfirm?: boolean,
  idNumber?: string,
  dateOfConsent?: string,
  attendedBy?: string,
  comment?: string,
  home?: string,
}
export enum Witnesses {
  RAY_MOGOKO = 'Ray Mogoko',
  WILLIAM_MUCHOGE = 'William Muchoge',
  DEBRAH_KINYA = 'Debrah Kinya',
  ROSEMARY_KAGWIRIA = 'Rosemary Kagwiria',
  JADLYNE_MAKENA = 'Jadlyne Makena'

}
