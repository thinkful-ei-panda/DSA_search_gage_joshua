import React from 'react';

export default class IntTextBox extends React.Component {

static defaultProps = {
    search: () => {},
    binaryInput: () => {},
    linearInput: () => {},
    state: {
        value: null,
        store: [],
        linearInput: '',
        binaryInput: ''
    }
}

    render(){
        return(
            <div>
                <div className='text_Box_Main'>
                    <form className='int_Form' onSubmit={this.props.search} onChange={this.props.binaryInput}>
                        <label>Binary Search</label><br></br>
                        <input value={this.props.state.binaryInput} name='binary_search_input' className='int__Input' required></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='text_Box_Main'>
                    <form className='int_Form' onSubmit={this.props.search} onChange={this.props.linearInput}>
                        <label>Linear Search</label><br></br>
                        <input value={this.props.state.linearInput} name='linear_search_input' className='int__Input' required></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div> 
        )
    }
}