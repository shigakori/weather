function unix(dt, type){
    let millsec = dt * 1000;
    let date = new Date(millsec);
    let result = 
    
    type == 'weekday' ? date.toLocaleString('en-US', { weekday: 'short' }) :
    type == 'month' ? date.toLocaleString('en-US', { month: 'short' }) :
    type == 'hour' ? date.getHours() : 
    type == 'minutes' ? date.getMinutes() :
    type =='day' ? date.toLocaleString('en-US', { day: 'numeric' }) : ''    
    
    return result;
}

export default unix;
