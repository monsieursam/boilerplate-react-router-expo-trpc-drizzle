import { type ActionFunctionArgs, redirect } from "react-router";
import { serverApi } from "~/trpc/server";

export async function action({ request, params }: ActionFunctionArgs) {
	const id = params.id;
	await serverApi.example.remove({
		id: id as string,
	});

	return redirect("/");
}
