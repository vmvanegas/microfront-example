import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

interface CardRadioGroupProps {
  options: { value: string; label: string; description: string }[]
}

const CardRadioGroup = ({ options }: CardRadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose an option</FormLabel>
      <RadioGroup name="card-radio-group" value={selectedValue} onChange={handleChange}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {options.map((option) => (
            <Card 
              key={option.value} 
              sx={{ minWidth: 200, border: selectedValue === option.value ? '2px solid primary.main' : '1px solid grey.300' }}
            >
              {/* CardActionArea makes the entire card clickable and focusable */}
              <CardActionArea component="div" onClick={() => setSelectedValue(option.value)}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                      {option.label}
                    </Typography>
                    {/* The Radio component is the actual form control */}
                    <Radio
                      checked={selectedValue === option.value}
                      value={option.value}
                      // Input props are important for accessibility (aria-label might be useful here)
                      inputProps={{ 'aria-label': option.label }} 
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </RadioGroup>
    </FormControl>
  );
};

export default CardRadioGroup;
