const colors = {
    cyan: '\u001b[38;5;6m',
    magenta: '\u001b[35m',
    yellow: '\u001b[33m',
    red: '\u001b[31m',
    green: '\u001b[32m',
    blue: '\u001b[34m',
    reset: '\u001b[0m',
};

export const log = (color: keyof typeof colors, ...args: string[]) => {
    console.info(`${colors[color]} ${args[0]}`, ...args.slice(1));
};
