import { createSelector } from "reselect";


const selectStateDirectory = state => state.directory;


export const selectDirectorySection = createSelector(
  [selectStateDirectory],
  directory => directory.sections
);