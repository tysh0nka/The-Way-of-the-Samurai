export const requiredField = (value: any) => {
    if(value) return undefined;
    return "Field is required"
}

export const maxLength = (value: any) => {
    if (value && value.length > 30) return "Max length is 30 symbols"
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
}