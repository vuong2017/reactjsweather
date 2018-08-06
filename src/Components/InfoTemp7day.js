import React , {Component} from 'react';
import '../styles/InfoTemp7day.css';
import ItemList7day from './ListItem7day/ItemList7day';
import PropTypes from 'prop-types';
class InfoTemp7day extends Component{
  render(){
    return(
      <div className="InfoTemp7day">
        <ItemList7day data={this.props.data} />
      </div>
    );
  }
}
InfoTemp7day.propTypes  = {
  data: PropTypes.array.isRequired
}
export default InfoTemp7day;
