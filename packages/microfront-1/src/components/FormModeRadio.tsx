import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import type { FormMode } from '../types/form.types';

interface FormModeRadioProps {
    onChange?: (mode: FormMode) => void
}

export default function FormModeRadio({ onChange }: FormModeRadioProps) {
    const [value, setValue] = useState<FormMode>('Fiscal');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target as HTMLInputElement).value as FormMode;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Modo</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value} 
                onChange={handleChange}
            >
                <FormControlLabel value="Fiscal" control={<Radio />} label="Fiscal" />
                <FormControlLabel value="ElectronicInvoicing" control={<Radio />} label="Factura electronica" />
                <FormControlLabel value="Management" control={<Radio />} label="Gestion" />
                <FormControlLabel
                    value="Payroll"
                    control={<Radio />}
                    label="Nomina"
                />
            </RadioGroup>
        </FormControl>
    );
}
