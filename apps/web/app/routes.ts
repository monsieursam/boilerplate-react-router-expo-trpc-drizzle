import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	route("/api/trpc/*", "routes/api/trpc.ts"),
	route("add", "./routes/actions/add.tsx"),
	route("delete/:id", "./routes/actions/delete/$id.tsx"),
	index("routes/home.tsx"),
] satisfies RouteConfig;
