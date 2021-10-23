import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
	const endpoint = preview
		? process.env.NEXT_PUBLIC_DATO_GRAPHQL_URL_PREVIEW
		: process.env.NEXT_PUBLIC_DATO_GRAPHQL_URL_PREVIEW;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
}
