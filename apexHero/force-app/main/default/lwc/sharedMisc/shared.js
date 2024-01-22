// simple interest

const si = (p,r,t) => { 
    if (p && r && t)
    { 
        return (p * r * t) / 100.0;
    }
    return 0.0;
}

const addition = (n1, n2) => { 
    return n1 + n2;
}

export { si,addition };