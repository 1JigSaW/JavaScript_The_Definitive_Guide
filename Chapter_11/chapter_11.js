const err = new Error('Error email');

function validateEmail(email) {
	return email.match(/@/) ?
		email :
		new Error(`Error email: ${email}`);
}

// const email = 'jane@doe.com';

const email = null;

try {
	const validatedEmail = validateEmail(email);
	if(validatedEmail instanceof Error) {
		console.error(`Error: ${validatedEmail.message}`);
	} else {
		console.log(`Correct email: ${validatedEmail}`);
	}
} catch(err) {
	console.error(`Error ${err.message}`);
}

try {
	console.log('This line is done...');
	throw new Error('Oops!');
	console.log('This line not is done...');
} catch(err) {
	console.log('Was error');
} finally {
	console.log('...always complete');
	console.log('This is where the cleanup is done');
}