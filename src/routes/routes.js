import { lazy } from "react";

const routes = [
	{
		path: "/",
		element: lazy(() => import("../pages/home/Home")),
		authRequired: false,
	},
	{
		path: "/services",
		element: lazy(() => import("../pages/services/Services")),
		authRequired: false,
	},
	{
		path: "/signin",
		element: lazy(() => import("../pages/signin/SignIn")),
		authRequired: false,
	},
	{
		path: "/signup",
		element: lazy(() => import("../pages/signup/SignUp")),
		authRequired: false,
	},
	{
		path: "/profile",
		element: lazy(() => import("../pages/profile/UserProfile")),
		authRequired: true,
	},
	{
		path: "/notarization",
		element: lazy(() => import("../pages/services/CreateNotarizationProfile")),
		authRequired: true,
	},
];

export default routes;
