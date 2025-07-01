import { TRPCProvider } from "~/trpc/Provider";
import { serverApi } from "../trpc/server";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader({ request }: Route.LoaderArgs) {
	const data = await serverApi.example.get();

	return { data };
}

export default function Home() {
	return (
		<TRPCProvider>
			<Welcome />
		</TRPCProvider>
	);
}
