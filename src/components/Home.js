import React from 'react'
import { withSiteData, withRouteData } from 'react-static'

import "./Home.css";

const Comp = props => <div>{props.title}</div>;

const WithSiteData = withSiteData(Comp);
const WithRouteData = withRouteData(Comp);
const WithSiteDataWithRouteData = withSiteData(withRouteData(Comp));
const WithRouteDataWithSiteData = withRouteData(withSiteData(Comp));

const Home = () => (
    <React.Fragment>
        <div>
            <h1>withSiteData(withRouteData(Comp)) is no longer as expected</h1>
            <p>
                When using <code>withSiteData(withRouteData(Comp))</code> it is expected (bc) that the site data will be overridden by the route data.
            </p>
            <p>
                Actually the siteData seems to win
            </p>
            <p>
                using <code>withRouteData(withSiteData(Comp))</code> works...
            </p>
            <p>
                So with a configuration where the siteData contains <code>title</code> as SITE_DATA and
                the route contains <code>title</code> as ROUTE_DATA
            </p>
        </div>
        <div className="Tests">
            <div className="Test">
                <pre className="Test__Input">export withSiteData(Comp)</pre>
                <pre className="Test_Output Test_Output--expected"><WithSiteData /></pre>
            </div>
            <div className="Test">
                <pre className="Test__Input">export withRouteData(Comp)</pre>
                <pre className="Test_Output Test_Output--expected"><WithRouteData /></pre>
            </div>
            <div className="Test">
                <pre className="Test__Input">export withSiteData(withRouteData(Comp))</pre>
                <pre className="Test_Output Test_Output--error"><WithSiteDataWithRouteData /></pre>
            </div>
            <div className="Test">
                <pre className="Test__Input">export withRouteData(withSiteData(Comp))</pre>
                <pre className="Test_Output Test_Output--expected"><WithRouteDataWithSiteData /></pre>
            </div>
        </div>
    </React.Fragment>
);

export default Home;
