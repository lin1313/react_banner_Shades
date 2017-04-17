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
/*��Ҷ����һ�ź���һ�Ų��������Ч����Ҫ��css3��transition-delay��transition-duration�����������Բ���ʱ�����ﵽ����Ч��*/