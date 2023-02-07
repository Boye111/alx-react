import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className="bodySectionWithMargin">
			<BodySection {...this.props} />
			</div>
		);
	}
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40",
  },
});

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
