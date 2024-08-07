import { redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {

	/*
	console.log("::Auth::",!locals.user);
	if(!locals.user) {
		console.log("Access Denied")
		throw redirect(303, '/')
	}
	*/
	
}

