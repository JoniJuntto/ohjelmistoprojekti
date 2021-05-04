  
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {

  const [value, setValue] = useState('esimerkki 1');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Otsikko</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="esimerkki 1" control={<Radio />} label="esimerkki 1" />
          <FormControlLabel value="esimerkki 2" control={<Radio />} label="esimerkki 2" />
          <FormControlLabel value="esimerkki 3" control={<Radio />} label="esimerkki 3" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}