module.exports = function everfulfix(dispatch) {
    dispatch.hook('S_START_COOLTIME_ITEM', 1, event => {
        if(event.cooldown == 0){
            return false;
        }
    })
}