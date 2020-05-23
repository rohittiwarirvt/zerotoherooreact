import ShopActionTypes from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
  type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
})
;

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});


export const fetchCollectionStartAsync = () => {

  return dispatch => {
    const collectionRef = firestore.collection('collections');
		
		collectionRef.get().then(async snapShot => {
      dispatch(fetchCollectionStart());
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      
      dispatch(fetchCollectionSuccess(collectionsMap));

		}, (error) => dispatch(fetchCollectionFailure(error.message)));
  }
};