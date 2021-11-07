import { Context, storage, logging } from "near-sdk-as";  

// --- contract code goes below  

const DEFAULT_RAW = 'DATA-RAW'

export function heartBeat(value: i32): void {   
	const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
	storage.set<i32>("counter", newCounter);   
	logging.log("Counter is now: " + newCounter.toString()); 
}  

export function getHeartBeat(): i32 {   
	return storage.getPrimitive<i32>("counter", 0); 
}  

export function setAmount(value: i32): void {   
	const newMount = storage.getPrimitive<i32>("mount", 0) + value;   
	storage.set<i32>("Mount", newMount);   
	logging.log("Mount is now: " + newMount.toString()); 
}  

export function getAmount(): i32{
	return storage.getPrimitive<i32>("Mount",0);
}

export function setTransPass(dataRaw: string): void{
	const accountId = Context.sender
	storage.set(accountId, dataRaw)
}

export function getTransPass(accountId: string): string | null{
	return storage.get<string>(accountId,DEFAULT_RAW)
}
