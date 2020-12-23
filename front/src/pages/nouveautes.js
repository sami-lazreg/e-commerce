import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import News from './News';
import {useEffect} from 'react';
import {getAction} from '../actions/getAction'


export default function Nouveautes() {
    const state=useSelector(state=>state.getReducer)
    const dispatch=useDispatch();       
useEffect(()=>{
    dispatch(getAction())
},[]);
    const phone =state.filter(el=>(el.category== "News"))
    console.log(phone)
    return (
        <div>
            <div className='container  mt-5'>
            <h1>Actualités</h1>
            <div className='news mt-5'>
            {phone.map((el)=><News state={el}/>)}
            </div>
            </div>

        </div>
    )
}
