const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

console.log(userRoles.get(u2));
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1));
console.log(userRoles.size);

for(let u of userRoles.keys())
	console.log(u.name);

for(let r of userRoles.values())
	console.log(r);

for(let ur of userRoles.entries())
	console.log(`${ur[0].name}: ${ur[1]}`);

userRoles.delete(u2);
userRoles.clear()

const SecretHolder = (function() {
	const secrets = new WeakMap();
	return class {
		setSecret(secret) {
			secrets.set(this, secret);
		}
		getSecret() {
			return secrets.get(this);
		}
	}
}) ();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('Secret A');
b.setSecret('Secret B');

console.log(a.getSecret());
console.log(b.getSecret());

const roles = new Set();
roles.add('User');
roles.add('Admin');
console.log(roles.size);
roles.add('User');
console.log(roles.size);
roles.delete('Admin');
console.log(roles.size);

const naughty = new WeakSet();

const children = [
	{ name: 'Suzy' },
	{ name: 'Derek' },
];

naughty.add(children[1]);

for(let child of children) {
	if(naughty.has(child))
		console.log(`Coal for ${child.name}!`);
	else
		console.log(`Gifts for ${child.name}!`);
}