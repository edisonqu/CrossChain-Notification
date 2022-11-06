const { Client }  = require("@xmtp/xmtp-js");
const { Wallet} = require("ethers");

export async function sendMessage(message:string, receiver:string) {
    // const wallet = new Wallet("0xc2690d9b786693d437a749f997775dac2ad8f8911c91170926c9ccfa4437e1e2");
    // const client = await Client.create(wallet);
    // console.log(wallet.privateKey)
    // const conversation = await client.conversations.newConversation(receiver);
    // await conversation.send(message);

    const wallet = new Wallet("0x8a888b6929b09a02a98d7e9ab10347a9a569ec693129efe33302096879ab2162")

// Create the client with your wallet. This will connect to the XMTP development network by default
    const xmtp = await Client.create(wallet)

    console.log(wallet.publicKey)
    console.log(wallet.privateKey)
    const conversation = await xmtp.conversations.newConversation(
        receiver
    )


    const messages = await conversation.messages()

    // Send a message
    await conversation.send(message) // message being called
    return true;

}
export default sendMessage;

// sendMessage("Hello, Something just happened!", '0xBEf18A02B0fdB99bCA41F37e19DE97F5802f962c').then(r => {
//     console.log("Worked")
//
// }).catch(err => {console.log(err)})