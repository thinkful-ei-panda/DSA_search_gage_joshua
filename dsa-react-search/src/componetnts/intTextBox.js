import react from 'react';

export default class intTextBox extends React.Component {


    render(){
        return(
            <div className='text_Box_Main'>
                <form className='int_Form' onSubmit={()=>/* */}>
                    <label>int search</label>
                    <input value='' className='int__Input' required></input>
                </form>

            </div>
        )
    }

    }