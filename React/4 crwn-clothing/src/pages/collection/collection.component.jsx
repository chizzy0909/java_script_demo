import React from "react";
//import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
//import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = (collection) => {
  console.log(collection.collection);
  //   console.log(collection.title);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.collection.title}</h2>
      <div className="items">
        {collection.collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
//   };
// };

// export default connect(mapStateToProps)(CollectionPage);

export default CollectionPage;
