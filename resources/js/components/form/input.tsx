import { FormGroup, InputGroup, InputGroupProps } from '@blueprintjs/core'
import { get, omit, startCase } from 'lodash'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

export type ControlledInputProps<T1 extends FieldValues> = {
  label?: string
  name: Path<T1>
  control: Control<T1, any>
} & InputGroupProps

export function ControlledInput<T1 extends FieldValues>({
  label,
  name,
  control,
  ...props
}: ControlledInputProps<T1>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormGroup
          label={label || startCase(name as string)}
          labelFor={name}
          intent={get(errors, name) ? 'danger' : 'none'}
          helperText={get(errors, name)?.message as string}
        >
          <InputGroup
            id={name}
            {...omit(field, 'ref')}
            inputRef={field.ref}
            intent={get(errors, name) ? 'danger' : 'none'}
            {...props}
          />
        </FormGroup>
      )}
    />
  )
}
