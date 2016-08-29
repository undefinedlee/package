export default function(packageJson){
	return Object.assign(
		{},
		packageJson.dependencies,
		packageJson.devDependencies,
		packageJson.optionalDependencies,
		packageJson.peerDependencies
	);
}