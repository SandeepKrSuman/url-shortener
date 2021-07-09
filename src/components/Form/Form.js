import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import './Form.css';

function Form(props) {
    return (
        <form className="formstyle" noValidate autoComplete="off" onSubmit={props.handleSubmit}>
            <TextField
                className="textfield-style"
                required
                type="url"
                onChange={props.handleChange}
                value={props.inputTxt}
                id="outlined-basic"
                label="Enter a URL"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button variant="contained" style={{backgroundColor: '#039be5', color: '#ffffff'}} onClick={props.handleSubmit}>Shorten</Button>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
}

export default Form;