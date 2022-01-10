import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select'

const options = [
    {value:"Javascript", label:"Javascript"},
    {value:"ReactJS", label:"ReactJS"},
    {value:"HTML", label:"HTML"},
    {value:"Sass", label:"Sass"},
    {value:"WebDev", label:"WebDev"},
    {value:"Programming", label:"Programming"},
    {value:"CSS", label:"CSS"},
    {value:"Node", label:"Node"},
    {value:"Java", label:"Java"},
    {value:"AWS", label:"AWS"},
    {value:"Phyton", label:"Phyton"},
    {value:"Linux", label:"Linux"},
]

class App extends React.Component {
    state = {
        selectedOptions: [],
    }

    handleSelectedOptions = (selectedOptions) => { 		
        let values = []; 		
        selectedOptions.map((v) => values.push(v.value));  		
        this.setState((state) => ({ 			
            ...state, 			
            tags: values 		
        }))
        console.log.selectedOptions; 	
    };

    handleChange = (selectedOptions) => {
        this.setState({ selectedOptions });
        }
    
        render() {
        const { selectedOptions } = this.state;
    
        return (
            <React.Fragment>
            <Select
                isMulti
                value={selectedOptions}
                onChange={this.handleChange}
                options={options}
            />
            {selectedOptions.map(o => <p>{o.value}</p>)}
            </React.Fragment>
        );
        }
    }
    
    render(<App />, document.getElementById('root'));

