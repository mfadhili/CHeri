
export class Caregiver implements CaregiverData {

  constructor(
    public id?: number,
    public fullName?: string,
    public msisdn?: string,
    public email?: string,
    public password?: string
  )  {

  }
}

export interface CaregiverData {
  id?: number;
  fullName?: string;
  msisdn?: string;
  email?: string;
  password?: string;
}
