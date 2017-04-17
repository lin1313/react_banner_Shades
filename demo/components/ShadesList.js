/**
 * Created by dell on 2017/4/13.
 */
import React,{Component} from 'react'
import ShadesMark from './ShadesMark.js'

export default class ShadesList extends Component{
    render(){
        const {src,markLength,width,height,curIndex,index} = this.props;
        const marks = [];
        const singleWidth = Math.ceil(width / markLength);
        for(var i = 0;i< markLength;i++){
            const left = singleWidth * i;
            marks.push(<ShadesMark
                            key={i}
                            src = {src}
                            left = {left}
                            width={singleWidth}
                            height={height}
                            curIndex={curIndex}
                            index={index}
                        />);
        }
        return <li style={{zIndex: curIndex == index ?  2 : 1}}>
                    <a href="#">
                        {marks}
                    </a>
                </li>
    }
}
