import {useState } from 'react'
import { Button, Group, Box, Title, Grid, NativeSelect, Header, Stack, Input, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { postEvm} from './api/hello';
import {postToIPFS} from "./utils/postToIPFS";

export default function IndexPage() {
  const [chain, setChain] = useState(""); //On this chain

  //set trigger
  const [triggerSelected, setTriggerSelected] = useState(""); //when this trigger
  //trigger input
  const [triggerLevel, setTriggerLevel] = useState(""); //hits this amount

  //contract address
  const [contractAddress, setContractAddress] = useState(""); //on this contract

  //method ID
  const [contractMethod, setContractMethod] = useState(""); //call this method

  //ABI
  const [contractABI, setContractABI] = useState(""); //with this ABI

  //sent message
  const [message, setMessage] = useState(""); //say this message

  //set task
  const [actionSelected, setActionSelected] = useState(""); //using either API or XMPT

  //if XMTP selected
  const [XMTPUsername, setXMTPUsername] = useState(""); //to here

  //data to send back to the backend
  let data;

  return (
    <Box style={{padding: "100px"}}>
      <Title>Automate Notifications</Title>
      {/* text box that says "For example, On the Ethereum chain, when the price trigger at Contract Address A, Method ID B, and ABI C  hits price D, use XMTP to send the message 'price has been hit' to XMTP Username E */}
      <Paper style={{marginBottom: "20px", padding: "md", fontStyle: "italic" }}>
        <p>For example:
          <br></br> On the Ethereum<span style={{color: "#64B5F6"}}> chain</span>, when the price <span style={{color: "#37d67a"}}> trigger </span>at <span style={{color: "#f47373"}}>Contract Address </span>A, <span style={{color: "#ba68c8"}}>Method ID </span>B, and <span style={{color: "#ffd300"}}>ABI</span> C <span style={{color: "#2d862e"}}>crosses</span> price D, <span style={{color: "#4a4a4a"}}>via </span>XMTP to send the <span style={{color: "#a1887f"}}>message</span> &apos;price has been hit&apos; to XMTP <span style={{color: "#d9e3f0", fontStyle: "bold"}}>Username</span> E</p>

        </Paper>

      <Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
            {/* create a box with a dark blue border of size 2px */}
            <Box style={{border: "2px solid #64B5F6", padding: "20px"}}>
              <Group>
                <NativeSelect
            label="On this chain..."
            placeholder="Select Chain"
            data={['Ethereum', 'Polygon']}
            value={chain}
            onChange={(event) => setChain(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
              </Group>
              </Box>
          
        </Grid.Col>
      </Grid>

      {/* Trigger */}
      {chain && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={10}>
          {/*  Menu item with a list of if */}
          <Box style={{border: "2px solid #37d67a", padding: "20px"}}>
          <NativeSelect
            label="When this trigger..."
            placeholder="Select Trigger"
            data={['Liquidation: Collateralization Ratio', 'Price', 'ENS Contract']}
            value={triggerSelected}
            onChange={(event) => setTriggerSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
          </Box>
        </Grid.Col>
        
        
        <Grid.Col span={4}>
          <Box style={{border: "2px solid #f47373", padding: "20px"}}>
          <label>... at this contract address ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractAddress(event.currentTarget.value)} placeholder="Contract Address" />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box style={{border: "2px solid #ba68c8", padding: "20px"}}>
          <label>... for this method ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractMethod(event.currentTarget.value)} placeholder="Method ID" />
          </Box>
        </Grid.Col>

        <Grid.Col span={4}>
          <Box style={{border: "2px solid #ffd300", padding: "20px"}}>
          <label>... with this ABI ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractABI(event.currentTarget.value)} placeholder="ABI" />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box style={{border: "2px solid #2d862e", padding: "20px"}}>
          <label>... crosses this value ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setTriggerLevel(event.currentTarget.value)} placeholder="Value" />
          </Box>
        </Grid.Col>

      </Grid>
      
      )}

      {/* set Action Selected */}
      {triggerLevel && contractABI && contractAddress && contractMethod && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
          <Box style={{border: "2px solid #4a4a4a", padding: "20px"}}>
          <NativeSelect
            label="... via ..."
            placeholder="Select Action Type"
            data={['XMTP']}
            value={actionSelected}
            onChange={(event) => setActionSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
          </Box>
        </Grid.Col>
      </Grid>
      )}


      {/* set Action Selected */}
      {actionSelected == "XMTP" && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>

        <Grid.Col span={4}>
          <Box style={{border: "2px solid #a1887f", padding: "20px"}}>
          <label>... send this message ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setMessage(event.currentTarget.value)} placeholder="Message" />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box style={{border: "2px solid #d9e3f0", padding: "20px"}}>
          <label>... to this XMTP Username </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setXMTPUsername(event.currentTarget.value)} placeholder="XMTP Username" />
        </Box>  
        </Grid.Col>

                
      </Grid>
      )}

      {message && XMTPUsername && (
              <Button
               
                style={{marginTop: "20px" , width:"70%",  backgroundColor: "linear(to-l, #7928CA, #FF0080)" }}
                
                onClick={ () => {
                  {

                    let data = ({
                      chain: chain,
                      triggerSelected: triggerSelected,
                      contractAddress: contractAddress,
                      contractMethod: contractMethod,
                      contractABI: contractABI,
                      triggerLevel: triggerLevel,
                      actionSelected: actionSelected,
                      message: message,
                      XMTPUsername: XMTPUsername,
                    })

                    const hash =  postToIPFS(data)
                    console.log(hash)

                    // console.log(data.chain)

                    postEvm({
                      chain: chain,
                      triggerSelected: triggerSelected,
                      contractAddress: contractAddress,
                      contractMethod: contractMethod,
                      contractABI: contractABI,
                      triggerLevel: triggerLevel,
                      actionSelected: actionSelected,
                      message: message,
                      XMTPUsername: XMTPUsername,
                    })
                  }
                }}
              >
                Send
              </Button>
          )}

      
    </Box>
  );
}