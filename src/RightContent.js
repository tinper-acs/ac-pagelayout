import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'bee-layout';

const propTypes = {};
const defaultProps = {};

class rightContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'right-content';
        if(className)classes+=' '+className;
        return (
            <Col className={classes} {...other} >
                {this.props.children}
            </Col>
        )
    }
}
rightContent.propTypes = propTypes;
rightContent.defaultProps = defaultProps;
export default rightContent;
