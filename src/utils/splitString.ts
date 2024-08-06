export const splitStringUsingRegex = (str: string): string[] => {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match;

    while((match = regex.exec(str)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}