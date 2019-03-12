# react-static withSiteData(withRouteData(Comp)) is no longer as expected

When using `withSiteData(withRouteData(Comp))` it is expected (bc) that the site data will be overridden by the route data.

Actually the `siteData` seems to win... using `withRouteData(withSiteData(Comp))` works...

So with a configuration where the `siteData` contains `title` as _"SITE_DATA"_ and
the route contains `title` as _"ROUTE_DATA"_

 * If using (expected) `withSiteData(withRouteData(Comp))` the `title` will be unexpected _"SITE_DATA"_
 * If using (illogical) `withRouteData(withSiteData(Comp))` the `title` will be _"ROUTE_DATA"_

Try it:
            
    yarn && yarn run start
    
go to http://localhost:3000