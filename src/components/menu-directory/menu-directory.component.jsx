import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItem from "../menu-item/menu-item.component"
import "./menu-directory.style.scss";
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const  MenuDirectory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(
        ({ id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}></MenuItem>
                        )
      )
    }
  </div>
  );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});


export default connect(mapStateToProps)(MenuDirectory);