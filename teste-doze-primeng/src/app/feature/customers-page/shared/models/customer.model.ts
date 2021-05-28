export interface CountryModel {
    name?: string;
    code?: string;
  }
  
  export interface RepresentativeModel {
    name?: string;
    image?: string;
  }
  
  export interface CustomerModel {
    id?: number;
    name?: string;
    country?: CountryModel;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: RepresentativeModel;
    verified?: boolean;
    balance?: boolean;
  }
  