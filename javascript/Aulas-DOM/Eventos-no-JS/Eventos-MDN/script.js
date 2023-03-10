function getEventType(event) {
    const log = document.getElementById('log')
    log.innerText = `${event.type}\n${log.innerText}`
}
// Keyboard events
document.addEventListener('keydown', getEventType, false)
// first
document.getEventListener('keypress', getEventType, false)
// second
document.addEventListener('keyup', getEventType, false)
// third 

// Mouse events 
document.addEventListener('mousedown', getEventType, false)
// first
document.addEventListener('mouseup', getEventType, false)
// second
document.addEventListener('click', getEventType, false)
// third

