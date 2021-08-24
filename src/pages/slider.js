import * as React from 'react'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import {getExampleImageData} from '../utils/imageUtils'
class Slider extends React.Component {
    constructor(props) {
        super(props)
        
        // const imageList = []
        // this.props.slider.forEach(element => {
        //     const image = getImage(element)
        //     imageList.push(image)
        // });
        this.state = {
            images: this.props.slider,
            currentIndex: 0,
            translateValue: 0
        }
        console.log(this.state.images, "STATE OF SLKIDED")
        
    }

    goToPrevSlide = () => {
        console.log("hetr")
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        console.log("hetr")
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        // return document.querySelector('.slide').clientWidth
    }

    render() {
        const image = {
            url:this.state?.images?.[this.state.currentIndex],
            width:400,
            height:400

        }
        const imageData = getExampleImageData({ image, layout: "fixed", width: 400 })
        return (
            <div className="slider" style={{
                position: 'relative',
                width: '500px',
                backgroundColor:'yellow',
                margin: 'auto',
                height: '500px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                flexDirection:'row'
            }}>
                <div>
                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
                </div>
        
                {/* <StaticImage src={this.state.images[this.state.currentIndex]}  alt={"this.props.data.name"} /> */}
                <GatsbyImage image={imageData} alt={"good image"} />

                
            </div>
        );
    }
}


// const Slide = ({ image }) => {
//     const styles = {
//         backgroundImage: `url(${image})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '50% 60%',
//         display: 'inline-block',
//         height: '100%',
//         width: '80%',
//         marginLeft:'10%'

//     }
//     return <div className="slide" style={styles}></div>
// }


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide} style={{
            height: 50,
            width: 50,
            backgroundColor:'green',
            zIndex:90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f9f9f9',
            borderRadius: '50%',
            cursor: 'pointer',
            // position:'absolute'
            }}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide} style={{
            height: 50,
            width: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f9f9f9',
            borderRadius: '50%',
            cursor: 'pointer',
        }}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

export default Slider