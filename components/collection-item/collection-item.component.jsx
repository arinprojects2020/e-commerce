import React from 'react';
import { connect } from 'react-redux';



import CustomButton from '../custom-button/custom-button.component';
import { addItem, decrementPiece } from '../../redux/cart/cart.actions';


import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem  }) => {
  const { name, price, pieces, imageUrl } = item;
  
  

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
        <span className='pieces'>{pieces}</span>
      </div>
      <CustomButton id="abc" onClick={()=>addItem(item)} inverted>
        Add to cart
      </CustomButton>
      
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  

});

  






export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);