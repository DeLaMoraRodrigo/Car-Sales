const ADD_FEATURE = "ADD_FEATURE";

const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
    console.log("Attempting to add feature")
    console.log(feature)
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    console.log("Attempting to remove feature")
    console.log(feature)
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}