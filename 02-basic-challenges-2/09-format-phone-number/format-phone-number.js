// function formatPhoneNumber(arrPhoneNo) {
//     let phoneNo = '';
//     let formatedPhoneNo = arrPhoneNo.join('');
//     let thirdPhoneNo = formatedPhoneNo.slice(6);
//     let areaCode =  `${arrPhoneNo[0]}${arrPhoneNo[1]}${arrPhoneNo[2]}`
//     let secondPhoneNo =  `${arrPhoneNo[3]}${arrPhoneNo[4]}${arrPhoneNo[5]}`
//     return phoneNo = `(${areaCode}) ${secondPhoneNo}-${thirdPhoneNo}`
// }

function formatPhoneNumber(phoneNumber) {
    let formatedPhoneNo = phoneNumber.join('');
    let areaCode = formatedPhoneNo.slice(0,3);
    let prefix = formatedPhoneNo.slice(3,6);
    let sufix = formatedPhoneNo.slice(6);
    // console.log(areaCode, prefix, sufix);
    return `(${areaCode}) ${prefix}-${sufix}`
}

module.exports = formatPhoneNumber;
