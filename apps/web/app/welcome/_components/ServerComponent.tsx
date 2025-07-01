import { useFetcher, useLoaderData } from "react-router";
import type { loader } from "~/routes/home";

const AddUserComponent = () => {
	const addFetcher = useFetcher({ key: "add" });

	return (
		<div>
			<addFetcher.Form method="post" action="/add">
				<input type="text" name="first_name" placeholder="First Name" />
				<input type="text" name="last_name" placeholder="Last Name" />
				<input type="email" name="email" placeholder="Email" />
				<button type="submit">Add User</button>
			</addFetcher.Form>
		</div>
	);
};

const DeleteUserComponent = ({ id }: { id: string }) => {
	const deleteFetcher = useFetcher({ key: "delete" });

	return (
		<div>
			<deleteFetcher.Form method="post" action={`/delete/${id}`}>
				<button type="submit">Delete User</button>
			</deleteFetcher.Form>
		</div>
	);
};

export default function ServerComponent() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<div className="p-4 bg-blue-100 rounded-lg">
			<h2 className="text-lg font-semibold mb-2">Server Component</h2>
			{data?.map((item) => (
				<div key={item.id}>
					<p>{item.first_name}</p>
					<p>{item.last_name}</p>
					<p>{item.email}</p>
					<DeleteUserComponent id={item.id} />
				</div>
			))}

			<AddUserComponent />
		</div>
	);
}
