import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from '../main'

export const noPropsComponent = createRoute({
	getParentRoute: () => rootRoute,
	path: '/assets',
	component: lazyRouteComponent(
		() => import('./no-props'),
		'NoPropsPage',
	),
})

export const propsComponent = createRoute({
	getParentRoute: () => rootRoute,
	path: '/assets',
	component: lazyRouteComponent(
		() => import('./props'),
		'PropsPage',
	),
})