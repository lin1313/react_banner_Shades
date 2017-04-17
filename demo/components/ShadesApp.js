/**
 * Created by dell on 2017/4/13.
 */
import React,{Component} from 'react'
import Shades from './Shades.js'
import ShadesCircle from './ShadesCircle.js'
import ShadesArrow from './ShadesArrow.js'

export default class ShadesApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgArr:['images/fj01.jpg','images/fj02.jpg','images/fj03.jpg','images/fj04.jpg'],
            curIndex: 0
        };
        this.markLength = 6;
        this.width = 550;
        this.height = 360;
        this.time = null;
        this.count = this.state.imgArr.length;
    }
    componentDidMount(){
        this.doAuto();
    }
    doAuto(){
        this.time = setInterval(() => {
            this.setImgShow(1,null);
        },3500)
    }
    setImgShow(n,type){
        let _n = 0;
        switch (type){
            case null:
                _n = this.state.curIndex + n;
                break;
            case 'circle':
                _n = n;
                break;
            case 'right':
                _n = this.state.curIndex + 1;
                break;
            case 'left':
                _n = this.state.curIndex - 1;
        }
        if(_n > this.count-1){
            _n = _n - this.count;
        }
        if(_n < 0){
            _n = this.count - 1;
        }

        this.setState({
            curIndex: _n
        });
    }
    clearAnimate(){
        clearInterval(this.time);
        this.time = null;
    }
    render(){
        const {imgArr,curIndex} = this.state;
        return <div className="shades"
                    onMouseOver={this.clearAnimate.bind(this)}
                    onMouseOut={this.doAuto.bind(this)}
                >
                    <Shades
                        imgArr={imgArr}
                        markLength={this.markLength}
                        width={this.width}
                        height={this.height}
                        curIndex={curIndex}
                    />
                    <ShadesCircle length={imgArr} curIndex={curIndex} onCircleClick={this.setImgShow.bind(this)}/>
                    <ShadesArrow curIndex={curIndex} arrowClick={this.setImgShow.bind(this)}/>
                </div>
    }
}