import { fromEvent } from 'rxjs/observable/fromEvent'
import * as io from 'socket.io-client'

let stream = fromEvent(io('http://localhost:4501'), 'metric/eeg')

console.log('STREAM', stream)