export interface FotometroItem {
  time: any;
  battery: number;
  fail?: number;
  id?: any;
  mag: number;
  mag_err: number;
  name: string;
  reset?:number;
  signal?: number;
  tamb: number;
  tsky: number;
}
