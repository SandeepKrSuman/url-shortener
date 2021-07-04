import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import './Form.css';

function Form() {
    return (
        <form className="formstyle" noValidate autoComplete="off">
            <TextField
                className="textfield-style"
                required
                type="url"
                id="outlined-basic"
                label="Enter a URL"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button variant="contained" color="primary">Shorten</Button>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
}

export default Form;