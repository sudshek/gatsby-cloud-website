import * as React from 'react'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import {getExampleImageData} from '../utils/imageUtils'
class Tiles extends React.Component {
    constructor(props){
        super(props)

    }
	render() {
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
        
		return (
			<div className="tiles" style={{
                padding: 6,
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'relative'

            }}>
				{this.props?.gallery?.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
		);
	}
}

class Tile extends React.Component {
	
	render() {
		// Modify styles based on state values
		let tileStyle = {cover:'fit', resizeMode:'center'};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked

		
			tileStyle = {
				width: '18vw',
				height: '18vw'
			};
		
        const image = {
            url:this.props.data.image,
            width:400,
            height:400,
            placeholder:'blurred'

        }
        const imageData = getExampleImageData({ image, layout: "fixed", width: 400 })
		return (
			<div className="tile" style={{
                margin: 15,
	            cursor: 'pointer',
	            overflow: 'hidden',
	            width: 300,
	            height: 400,
            }}>
				{/* <img
					src={this.props.data.image}
					alt={this.props.data.name}
					style={tileStyle}
				/> */}
                <GatsbyImage image={imageData}  alt={"this.props.data.name"} style={tileStyle} />
                
			</div>
		);
	}
}


export default Tiles