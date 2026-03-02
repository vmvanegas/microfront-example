// useDynamicFormConfig.ts
import { formConfigByMode } from "../components/form.config"
import { FormMode, type FormValues } from "../types/form.types"

export const useDynamicFormConfig = (mode: FormMode) => {
  const config = formConfigByMode[mode]

  const defaultValues = config.fields.reduce((acc, field) => {
    if (field.defaultValue !== undefined) {
      acc[field.name] = field.defaultValue
    }
    return acc
  }, {} as Partial<FormValues>)

  return {
    fields: config.fields,
    defaultValues
  }
}