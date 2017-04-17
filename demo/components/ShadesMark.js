/**
 * Created by dell on 2017/4/13.
 */
import React,{Component} from 'react'

export default class ShadesMark extends Component{
    render(){
        const {src,left,width,height,curIndex,index} = this.props;
        return <div className="mark" style={{left:left}}>
                    <span  style={{width: curIndex == index ?  width : 0 ,height:height,WebkitTransitionDelay: curIndex == index ? '0.01s':'0.38s',WebkitTransitionDuration:curIndex == index ? '0.4s':'0.2s'}}>
                        <img src={src} style={{left:left*-1}}/>
                    </span>
        </div>
    }
}
/*百叶窗上一张和下一张产生交替的效果主要用css3的transition-delay和transition-duration两个动画属性产生时间差而达到最终效果*/