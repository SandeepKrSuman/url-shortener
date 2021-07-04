import React, {useState} from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";

import './Container.css';


function Container(){

    const [display, setDisplay] = useState(false);
    const [inputTxt, setInputTxt] = useState("");
    const [apiData, setApiData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    
    const url = '';

    function handleChange(event){
        setInputTxt(event.target.value);
    }

    function handleSubmit(event){
        setError(false);
        setLoading(true);
        if(inputTxt !== ""){
            //post operation
        }
        else{
            setLoading(false);
        }
        event.preventDefault();
        setDisplay(true);
      }

      return (
        <div class="contain">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} inputTxt={inputTxt} />
        <Table />
        </div>
    );

}

export default Container;