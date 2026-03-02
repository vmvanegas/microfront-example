import type { FieldConfig } from "../types/field-config.types"
import { FormMode } from "../types/form.types"

type FormConfig = {
  fields: FieldConfig[]
}

const rowData = [
  { check: false, name: "Jhon Doe", email: 'jhon.doe@company.com', payroll: false },
  { check: true, name: "Jane Smith", email: 'jane.smith@company.com', payroll: false },
  { check: false, name: "Bob Johnson", email: 'bob.johnson@company.com', payroll: false },
  { check: true, name: "Alice Williams", email: 'alice.williams@company.com', payroll: false },
  { check: false, name: "Charlie Brown", email: 'charlie.brown@company.com', payroll: false },
  { check: false, name: "Diana Miller", email: 'diana.miller@company.com', payroll: false },
]

const coldefs = [
  { field: "check" },
  { field: "name" },
  { field: "email" },
  { field: "payroll" },
]

const emailFieldConfig: FieldConfig = {
  name: 'email',
  label: 'Correo electronico',
  type: 'email',
  visible: true,
  required: true,
  defaultValue: ''
}

const cardFieldConfig: FieldConfig = {
  name: 'card',
  label: 'Tipo de usuario',
  type: 'card',
  visible: true,
  required: true,
  defaultValue: 'USER',
  options: [
    { label: 'User', value: 'USER', description: 'This is the first choice.' },
    { label: 'Admin', value: 'ADMIN', description: 'This is the second choice.' }
  ]
}

const gridFieldConfig: FieldConfig = {
  name: 'grid',
  label: 'Usuarios',
  defaultValue: { rowData, columnDefs: coldefs },
  type: 'grid',
  visible: false
}

export const formConfigByMode: Record<FormMode, FormConfig> = {
  [FormMode.FISCAL]: {
    fields: [
      emailFieldConfig,
      cardFieldConfig,
      gridFieldConfig
    ]
  },

  [FormMode.ELECTRONICINVOICING]: {
    fields: [
      emailFieldConfig,
      cardFieldConfig,
      gridFieldConfig
    ]
  },

  [FormMode.MANAGEMENT]: { fields: [] },
  [FormMode.PAYROLL]: { fields: [] }
}