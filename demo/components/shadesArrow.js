/**
 * Created by dell on 2017/4/14.
 */
import React,{Component} from 'react'

export default class ShadesArrow extends Component{
    render(){
        const {curIndex,arrowClick} = this.props;
        return <div className="arrow">
            <a href="#" className="left" onClick={() => arrowClick(curIndex,"left")}>&lt;</a>
            <a href="#" className="right" onClick={() => arrowClick(curIndex,"right")}>&gt;</a>
        </div>
    }
}