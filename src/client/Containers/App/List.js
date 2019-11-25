import React, { Component } from 'react';

class List extends React.Component {
    constructor() {
        super()
        
    }
    subnum(n){
        this.props.sub(n)
    }
    addnum(n){
        this.props.add(n)
    }
    render() {
        let {data} = this.props;
        return (
            <div className = 'List'>
                {
                    data.map((v,i)=>{
                        return(
                            <li key = {i}>
                                <h1>{v.tit}</h1>
                                <h2>价格:{v.sprice}</h2>
                                <p>
                                    <button onClick = {()=>{
                                        this.subnum(i)
                                    }}>-</button>
                                    <span>{v.count}</span>
                                    <button onClick = {()=>{
                                        this.addnum(i)
                                    }}>+</button>
                                </p>
                            </li>
                        )
                    })
                } 
            </div>
        )
    }
}
export default List;
