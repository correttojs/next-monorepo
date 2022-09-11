type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;
export const getProcessEnvs = <T extends readonly string[]>(process: { env: Record<string, string> }, keys: T) => {
    return keys.reduce((acc, key) => {
        const value = process.env[key];
        if (value === undefined) {
            throw new Error(`Missing env ${String(key)}`);
        }
        console.log(`Getting env ${String(key)}`);
        return { ...acc, [key]: value };
    }, {} as Record<ArrElement<T>, string>);
};

export const getPrNumberEnv = (process: { env: Record<string, string> }) => {
    const { PR_NUMBER } = getProcessEnvs(process, ['PR_NUMBER'] as const);

    const prNumber = parseInt(PR_NUMBER, 10);
    if (isNaN(prNumber)) {
        throw new Error(`PR_NUMBER is not a number ${PR_NUMBER}`);
    }

    return prNumber;
};
