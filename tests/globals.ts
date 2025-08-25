// Error handling for missing environment variables
function requireEnvVar(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`❌ Environment variable "${name}" is not set. Check your .env or CI variables.`);
	}
	return value;
}

// Declare created environment variables and export them here
export const USERNAME = requireEnvVar('USERNAME');
export const PASSWORD = requireEnvVar('PASSWORD');
