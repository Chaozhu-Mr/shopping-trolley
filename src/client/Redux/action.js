const addNum = (ind,data)=>{
    return {
        type:'ADD_NUM',
        data:data,
        ind:ind,
    }
    
}
const subNum = (ind,data)=>{
    return {
        type:'SUB_NUM',
        data:data,
        ind:ind,
    }
}
const propsData = (data)=>{
    return {
        type:'PROPS_DATA',
        data,
    }
}

export {
    addNum,
    subNum,
    propsData,
}