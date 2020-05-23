import React from "react";
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import  CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";

import "./shop.style.scss";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class  ShopPage  extends  React.Component {
	state = {
		loading: true
	}
	unSubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');
		
		collectionRef.get().then(async snapShot => {
			const collectionMap = convertCollectionsSnapshotToMap(snapShot);
			updateCollections(collectionMap);
			this.setState({
				loading: false
			})
		});

	}

	render() {
		const {match} = this.props;
		const {loading} = this.state;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={ 
					props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}></Route>
				<Route  path={`${match.path}/:collectionId`} render={
					props => <CollectionPageWithSpinner isLoading={loading} {...props}/>
				}>
				</Route>
			</div>
		)
	}

}


const mapDispatchToProps = dispatch =>({
	updateCollections:  (collectionMap) => dispatch(updateCollections(collectionMap))
})
export default  connect(null, mapDispatchToProps)(ShopPage);