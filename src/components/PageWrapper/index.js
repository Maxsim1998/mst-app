import React from 'react';
import T from 'prop-types';
// styles
import { Wrap } from './styles';

export const PageWrapper = ({ children }) => <Wrap>{children}</Wrap>;

PageWrapper.propTypes = {
  children: T.node.isRequired,
};
