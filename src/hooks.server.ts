import { type Handle, redirect } from '@sveltejs/kit';
import { authenticateUser } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {


	// Stage 1: Makes request to server
	event.locals.user = authenticateUser(event)

	if (event.url.pathname.startsWith("/protected")) {
		if (!event.locals.user) {
			throw redirect(303,"/")
		}
		if (event.url.pathname.startsWith("/protected/admin")){
			console.log("/protected/admin")
			console.log("::role::",event.locals.user.role)
			if (event.locals.user.role !== "ADMIN") {
				throw redirect(303,"/protected")
			}
		}
	}

	const response = await resolve(event) // Stage 2: As request hits server & before reponse is generated

	// Stage 3: Render route & generate response await resolve (event)
	return response
	//return resolve(event)
}
