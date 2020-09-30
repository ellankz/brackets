module.exports = function check(str, bracketsConfig) {
    let copyStr = str;
    const haveMatches = (bracketPair) => {
        return copyStr.includes(bracketPair.join(""));
    };
    while (bracketsConfig.some(haveMatches)) {
        bracketsConfig.forEach((configPair) => {
            const pairStr = configPair.join("");
            while (copyStr.includes(pairStr)) {
                copyStr = copyStr.replace(pairStr, "");
            }
        });
    }
    return copyStr.length === 0;
};
