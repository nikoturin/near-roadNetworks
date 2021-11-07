import { heartBeat,setAmount,setTransPass } from '..'
import { storage, Context } from 'near-sdk-as'

describe('heartBeat ', () => {
  it('it should be alive', () => {
    heartBeat(10)
    storage.get<string>(Context.sender)
  })
})

describe('setAmount ', () => {
  it('it should have Amount', () => {
    setAmount(100000000)
    storage.get<string>(Context.sender)
  })
})

describe('setTransPass', () => {
  it('it should have total info cross road network ...', () => {
    setTransPass('{Data-Raw:{Name:Ramsés,Amount:1000,Operator:1}}')
    storage.get<string>(Context.sender)
  })
})

