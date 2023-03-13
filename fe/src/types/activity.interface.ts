import { IDivision } from '@/types/division.interface';

export interface IActivity {
  id: number;
  code: string;
  name: string;
  divisions: IDivision[];
}