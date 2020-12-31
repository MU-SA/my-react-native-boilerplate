import names from 'Transforms/CreateRouteNames'

export const auth = names(['login', 'verify', 'udate_profile'], {
  prefix: 'auth/',
})
export const home = names(['index', 'chatRoom', 'opponentProfile', 'incoming_call', 'updateInfo'], {
  prefix: 'home/',
})
export const splash = names(['index'], { prefix: 'splash/' })
export const chat = names(['oponent_profile'], { prefix: 'chat/' })
export const call = names(['incomingCall', 'videoRoom'], { prefix: 'call/' })
