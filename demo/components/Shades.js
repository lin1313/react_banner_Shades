/**
 * Created by dell on 2017/4/13.
 */
import React,{Component} from 'react'
import ShadesList from './ShadesList.js'

export default class Shades extends Component{
    render(){
        const {imgArr,markLength,width,height,curIndex} = this.props;
        return <ul className="shadeLists">
                    {
                        imgArr.map(
                            (item,i) => <ShadesList
                                key={i}
                                src={item}
                                markLength={markLength}
                                width={width}
                                height={height}
                                curIndex={curIndex}
                                index={i}
                                />
                        )
                    }
                </ul>
    }
}