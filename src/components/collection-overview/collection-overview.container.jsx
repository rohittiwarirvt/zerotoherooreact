import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionOverviewComponent from '../collection-overview/collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

 const CollectionOverviewContainerComponent = compose(
 connect(mapStateToProps),
 withSpinner, 
)(CollectionOverviewComponent);

export default CollectionOverviewContainerComponent;