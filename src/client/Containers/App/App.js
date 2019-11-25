import React, { Component } from 'react';
import {connect} from 'react-redux'
import './app.css'
import data from './data'
import List from './List'
import {addNum, subNum} from '../../Redux/action'
import { propsData} from '../../Redux/action'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data:data,
            count:0,
            sprice:0,
        }
    }
    
    componentDidMount(){
        let data = this.state.data;
        this.props.dispatch(propsData(data))
    }
    addn(ind){
        this.props.dispatch(addNum(ind,this.props.data))
        let count = 0;
        let sprice = 0;
        this.props.data.map((v,i)=>{
            count  += v.count;
            sprice += v.count * v.sprice;
        })
        this.setState({
            count:count,
            sprice:sprice,
        })
    }
    subn(ind){
        this.props.dispatch(subNum(ind,this.props.data))
        let count = 0;
        let sprice  = 0;
        this.props.data.map((v,i)=>{
            console.log(v.count)
            count  += v.count;
            sprice += v.count * v.sprice;
        })
        this.setState({
            count:count,
            sprice:sprice,
        })
    }
    render() {
        return (
            <div className = 'App'>
                <List data = {this.props.data} add = {(ind)=>{
                    this.addn(ind)
                }} sub = {(ind)=>{
                    this.subn(ind)
                }
                }/>
                <div className = 'Sprice'>
                    总价:{this.state.sprice}
                    总数量:{this.state.count}
                </div>
            </div>
        )
    }
}
const mapStatePropsTops = (state)=>{
    console.log(state)
    return {
        data:state.data,
    }
}
export default connect(mapStatePropsTops)(App)
