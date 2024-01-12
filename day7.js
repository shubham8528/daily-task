var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const first = new Array().fill(-1);
    const second = new Array().fill(-1);

    for (let i = 0; i < s.length; i++) {
        if (first[s.charCodeAt(i)] !== second[t.charCodeAt(i)])
            return false;
        first[s.charCodeAt(i)] = i;
        second[t.charCodeAt(i)] = i;
    }

    return true;
};

console.log(isIsomorphic("foo", "bar"));