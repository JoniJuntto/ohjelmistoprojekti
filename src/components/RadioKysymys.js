
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {

  const [value, setValue] = useState('esimerkki 1');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  if (props.radioData.length > 0) {
    console.log(props.radioData)
    return (
      <div>
        {
          props.radioData.map(val => {
            return (
              <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">{val.key.kysymysteksti}</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Kyllä" control={<Radio />} label="Kyllä" />
                    <FormControlLabel value="Ei" control={<Radio />} label="Ei" />
                    <FormControlLabel value="Ehkä" control={<Radio />} label="Ehkä" />
                  </RadioGroup>
                </FormControl>
              </div>
            )
          })
        }
      </div>
    );
  }

else if(props.radioData.length == 0){return(null);}
else{return(null)}


}