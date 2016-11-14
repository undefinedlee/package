export default function(packageJson){
	return Object.assign(
		{},
		packageJson.peerDependencies,
		packageJson.optionalDependencies,
		packageJson.devDependencies,
		packageJson.dependencies
	);
}