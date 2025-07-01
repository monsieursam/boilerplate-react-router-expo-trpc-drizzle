import { type ActionFunctionArgs, redirect } from "react-router";
import { serverApi } from "~/trpc/server";

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	await serverApi.example.add({
		first_name: formData.get("first_name") as string,
		last_name: formData.get("last_name") as string,
		email: formData.get("email") as string,
	});

	return redirect("/"); // Redirect back to the home page after submission
}
