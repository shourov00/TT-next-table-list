import { IClasse } from "@/types/classe.interface";

export interface IDivision {
  id: number;
  code: string;
  name: string;
  classes: IClasse[];
}