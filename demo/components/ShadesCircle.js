/**
 * Created by dell on 2017/4/14.
 */
import React,{Component} from 'react'

export default class ShadesCircle extends Component{
    render(){
        const {length,curIndex,onCircleClick} = this.props;
        return <ul className="circle">
            {
                length.map((item,i) =>
                        <li key={i} style={{backgroundColor: curIndex==i ? '#1da7c5' : '#ffffff'}} onClick={() => onCircleClick(i,'circle')}></li>
                )
            }
        </ul>
    }
}