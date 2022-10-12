function isStringRotation(str1 = "", str2 = "") {
    /**
     * we can say that str2 will always be a substring of (str1 + str1).
     */
    if (str1.length !== str1.length && str1.length !== 0) {
        return false;
    }
    return ((str1 + str1).includes(str2))
}

console.log(isStringRotation("waterbottle", "erbottlewat"));