function func(s, a, b) {

    if (typeof s != "string" ){
        return -1;
    }
   
    if (s.match(/^$/)) {
        return -1;
    }
   
    return Math.max(s.lastIndexOf(a), s.lastIndexOf(b));
}