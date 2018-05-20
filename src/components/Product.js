import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {



render() {
    return (
	      <div className="order">
	        <ul>
	          <li>{this.props.name}</li>
	          <li>{this.props.producer}</li>
	          <li>{this.props.hasWatermark ? this.props.hasWatermark : 'No Watermark'}</li>
	          <li>{this.props.color}</li>
	          <li>{this.props.weight}</li>
	          // <li>{300 > this.props.weight && this.props.weight > 80  ? this.props.weight : 'Too Light'}</li>

	        </ul>
	      </div>
	        )
	}


}



Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.number.isRequired
};



export default Product;