// DynamicForm.tsx
import {
  TextField,
  Button,
  Stack
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { FormMode, type FormValues } from '../types/form.types'
import { useDynamicFormConfig } from '../hooks/useDynamicFormConfig'
import CardRadioGroup from './CardRadioGroup'
import AgGridTable from './AgGridTable'

interface Props {
  mode: FormMode
}

export const DynamicForm = ({ mode }: Props) => {
  const { fields, defaultValues } = useDynamicFormConfig(mode)

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {fields.map(field => {
          if (!field.visible) return null

          switch (field.type) {
            case 'email':
              return (
                <Controller
                  key={field.name}
                  name={field.name}
                  control={control}
                  rules={{ required: field.required }}
                  render={({ field: rhfField, fieldState }) => (
                    <TextField
                      {...rhfField}
                      type={field.type}
                      label={field.label}
                      fullWidth
                      disabled={field.disabled}
                      error={!!fieldState.error}
                      helperText={fieldState.error && 'Required'}
                    />
                  )}
                />
              )

            case 'card':
              return (
                <Controller
                  key={field.name}
                  name={field.name}
                  control={control}
                  rules={{ required: field.required }}
                  render={({ field: rhfField }) => (
                    <CardRadioGroup
                      {...rhfField}
                      options={field.options || []}
                    />
                  )
                  }
                />
              )

            case 'grid':
              return (
                <Controller
                  key={field.name}
                  name={field.name}
                  control={control}
                  render={({ field: rhfField }) => (
                    <AgGridTable
                      {...rhfField}
                      value={field.defaultValue}
                      onChange={(data) => {
                        rhfField.onChange(data)
                      }}
                    />
                  )}
                />
              )

            default:
              return null
          }
        })}

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  )
}