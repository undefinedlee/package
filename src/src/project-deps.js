export default function(packageJson){
	return {
		...(packageJson.peerDependencies || {}),
		// packageJson.optionalDependencies,
		// packageJson.devDependencies,
		...(packageJson.dependencies || {})
	};
}