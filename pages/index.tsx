import {useState } from 'react'
import { Button, Group, Box, Title, Grid, NativeSelect, Header, Stack, Input } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import Trigger from './components/trigger';
import Task from './components/task';
import { postEvm} from './api/hello';

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

  return (
    <Box style={{padding: "100px"}}>
      <Title>Cross Chain Notifications</Title>
      <Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
          <NativeSelect
            label="On this chain..."
            placeholder="Select Chain"
            data={['Ethereum', 'Polygon']}
            value={chain}
            onChange={(event) => setChain(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
        </Grid.Col>
      </Grid>

      {/* Trigger */}
      {chain && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={10}>
          {/*  Menu item with a list of if */}
          <NativeSelect
            label="When this trigger..."
            placeholder="Select Trigger"
            data={['Liquidation: Collateralization Ratio', 'Price', 'ENS Contract']}
            value={triggerSelected}
            onChange={(event) => setTriggerSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <label>... at this contract address ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractAddress(event.currentTarget.value)} placeholder="Contract Address" />
        </Grid.Col>
        <Grid.Col span={4}>
          <label>... for this method ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractMethod(event.currentTarget.value)} placeholder="Method ID" />
        </Grid.Col>


        <Grid.Col span={4}>
          <label>... with this ABI ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setContractABI(event.currentTarget.value)} placeholder="ABI" />
        </Grid.Col>

        <Grid.Col span={4}>
          <label>... crosses this value ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setTriggerLevel(event.currentTarget.value)} placeholder="Value" />
        </Grid.Col>
      </Grid>
      )}

      {/* set Action Selected */}
      {triggerLevel && contractABI && contractAddress && contractMethod && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>
        <Grid.Col span={4}>
          {/*  Menu item with a list of if */}
          <NativeSelect
            label="... via ..."
            placeholder="Select Action Type"
            data={['XMTP']}
            value={actionSelected}
            onChange={(event) => setActionSelected(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
          />
        </Grid.Col>
      </Grid>
      )}


      {/* set Action Selected */}
      {actionSelected == "XMTP" && (<Grid gutter={"md"} style={{ marginTop: "20px" }}>

        <Grid.Col span={4}>
          <label>... send this message ... </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setMessage(event.currentTarget.value)} placeholder="Message" />
        </Grid.Col>
        <Grid.Col span={4}>
          <label>... to this XMTP Username </label>
          <Input style={{ marginTop: "0px" }} onChange={(event: any) => setXMTPUsername(event.currentTarget.value)} placeholder="XMTP Username" />
        </Grid.Col>

                
      </Grid>
      )}

      {message && XMTPUsername && (
              <Button
               
                style={{marginTop: "20px" , width:"70%",  backgroundColor: "linear(to-l, #7928CA, #FF0080)" }}
                
                onClick={() => {
                  {
                    console.log({
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