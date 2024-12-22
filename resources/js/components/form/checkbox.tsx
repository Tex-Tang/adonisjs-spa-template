import { Checkbox, CheckboxProps, FormGroup } from '@blueprintjs/core'
import { get, omit } from 'lodash'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

export type ControlledCheckboxProps<T1 extends FieldValues> = {
  name: Path<T1>
  control: Control<T1, any>
} & CheckboxProps

export function ControlledCheckbox<T1 extends FieldValues>({
  name,
  control,
  ...props
}: ControlledCheckboxProps<T1>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormGroup
          intent={get(errors, name) ? 'danger' : 'none'}
          helperText={get(errors, name)?.message as string}
        >
          <Checkbox id={name} {...omit(field, 'ref')} inputRef={field.ref} {...props} />
        </FormGroup>
      )}
    />
  )
}
