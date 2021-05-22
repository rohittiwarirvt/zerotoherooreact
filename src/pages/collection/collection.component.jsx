import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './collection.styles.scss';


const CollectionPage =({collection}) =>{

  const {title, items} = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'> {title}</h2>
      <div className='items' >
        { items.map( item => (
         <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}

      </div>
    </div>
  )
};



const mapStateToProps = (state, ownProps) =>{
  return createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId),
    isLoading: () => !selectIsCollectionsLoaded
  })
};

export default compose(
  connect(mapStateToProps),
  WithSpinner)(CollectionPage);