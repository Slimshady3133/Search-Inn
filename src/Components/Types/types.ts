export interface Company {
  value: string;
  data: {
    address: {
      value: string;
      data: {
        country: string;
      };
    };
    kpp: number;
    inn: string;
  };
}
