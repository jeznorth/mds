import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { RETURN_PAGE_TYPE, SSO_LOGOUT_ENDPOINT } from "@/constants/environment";

class ReturnPage extends Component {
  static propTypes = {
    location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  };

  componentDidMount() {
    // grab the code from the redirect url
    const { type } = queryString.parse(this.props.location.search);

    switch (type) {
      case RETURN_PAGE_TYPE.SITEMINDER_LOGOUT:
        // just returned from SiteMinder, sign out from SSO this time
        window.open(SSO_LOGOUT_ENDPOINT, "_self");
        break;
      case RETURN_PAGE_TYPE.LOGOUT:
        // finished logging out, close this page
        window.close();
        break;
      default:
        break;
    }
  }

  render() {
    return <div />;
  }
}

export default ReturnPage;
