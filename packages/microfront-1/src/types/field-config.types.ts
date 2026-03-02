import type { FormValues } from "./form.types"

// field-config.types.ts
export type FieldType = 'email' | 'card' | 'grid'

export interface FieldConfig {
  name: keyof FormValues
  label: string
  type: FieldType
  visible: boolean
  required?: boolean
  disabled?: boolean
  defaultValue?: any
  value?: any
  options?: { label: string; value: string, description: string }[]
}