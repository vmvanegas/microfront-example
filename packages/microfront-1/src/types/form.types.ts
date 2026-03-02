// form.types.ts
export const FormMode = {
  FISCAL: 'Fiscal',
  ELECTRONICINVOICING: 'ElectronicInvoicing',
  MANAGEMENT: 'Management',
  PAYROLL: 'Payroll'
} as const;

export type FormMode = typeof FormMode[keyof typeof FormMode];

export interface FormValues {
  email: string
  card: string
  grid: boolean
}