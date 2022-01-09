import React from 'react';

function Output (props) {


if(props.menu == 1){
    return(
        <div>
            <div className='green'>
                <label htmlFor="">-----</label>
                <div> Dzień dobry {props.imie}</div>
                <div> Twoje zamówienie Nr: {props.orderId}</div>
                <div> wybrałeś menu numer 111</div>
                
            </div>
        
        </div>
    )
}else{
    if(props.menu == 2){
        return(
            <div>
                <div className='blue'>
                    <label htmlFor="">-----</label>
                    <div> Dobry wieczór {props.imie}</div>
                    <div> Twoje zamówienie Nr: {props.orderId}</div>
                    <div> wybrałeś menu numer 222</div>
                    
                </div>
            
            </div>
        )
    }else {
        return(
            <div>
                <div className='red'>
                    <label htmlFor="">-----</label>
                    <div> Cześć {props.imie}</div>
                    <div> Twoje zamówienie Nr: {props.orderId}</div>
                    <div> wybrałeś menu numer 333</div>
                    
                </div>
            
            </div>
        )
    }



}

}

export default Output;