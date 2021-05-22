import { connect} from 'react-redux';
import { compose } from 'redux';
import  { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview, selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionOverview = ({collections}) => {
  return (
    <div className='collection-overview'>
      {collections.map( ({ id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))}
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching
});

export default compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);