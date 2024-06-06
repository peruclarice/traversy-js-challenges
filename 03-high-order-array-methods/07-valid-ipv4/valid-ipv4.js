const isValidIPv4 = (str) => {
    const splitIp = str.split('.');
    if (splitIp.length > 4 || splitIp.length < 4) {
        return false;
    }
    const checkIp = splitIp.every( (value) => {
        const num = parseInt(value);
        return num >= 0 && num <= 255 && value === num.toString();
    } );
    return checkIp;
};

module.exports = isValidIPv4;
