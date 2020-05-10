import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import "./shop.style.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";



const  ShopPage = ({collections}) => (
	<div>
		{collections.map(
				({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>)}
	</div>
  )



const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})
export default  connect(mapStateToProps)(ShopPage);