import React, {useState} from "react";
import Typography from '@material-ui/core/Typography';
import Form from "../Form/Form";
import Table from "../Table/Table";
import axios from 'axios';

import './Container.css';


function Container(){

    const [inputTxt, setInputTxt] = useState("");
    const [notUrl, setNotUrl] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [fetchUrl, setFetchUrl] = useState({});

    function handleChange(event){
        setInputTxt(event.target.value);
    }

    function is_url(str){
        let exp = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
        if(exp.test(str))
        {
            return true;
        }
        else{
            return false;
        }
    }

    function fix_url(url) {
        if(url.substring(0, 7) === 'http://' || url.substring(0, 8) === 'https://'){
            return url;
        }
        else{
            return `http://${url}`;
        }
    }

    function handleSubmit(event){
        setNotUrl(false);
        setLoading(true);
        if(is_url(inputTxt)){
            const inputUrl = fix_url(inputTxt);
            const postData = {full: inputUrl};
            axios.post('http://localhost:5000/short', postData)
            .then((res) => setFetchUrl(res.data[0]))
            .catch(err => {
                console.error(err);
            });
            
            setInputTxt("");
            setShowTable(true);
        }
        else{
            setNotUrl(true);
        }
        setTimeout(() => {
            setLoading(false);
          }, 500);
        event.preventDefault();
      }

      return (
        <div className="contain">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} inputTxt={inputTxt} />
        {isLoading ? <img className="spinner" src="preloader.gif" alt="Loading..." /> : notUrl ? <Typography style={{marginTop: '15%', backgroundColor: '#E98580'}} variant="h6" component="h3">Unable to shorten that link. It is not a valid url.</Typography> : showTable ? <Table full={fetchUrl.full} short={fetchUrl.short} /> : null}
        </div>
    );

}

export default Container;