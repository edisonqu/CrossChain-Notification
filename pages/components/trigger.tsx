
import {
    Box,
    Button,
    NativeSelect,
    Text,
    Input
} from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";
import Sonr from "./chains/sonr";
import Evm from "./chains/evm";

function Trigger(props: any) {
  return (
    // Creates a box with 3 inputs one for the contract address, one for the contract method, and one for the contract method parameters
    <Box>
        <NativeSelect
        style={{ marginTop: "20px" }}
            placeholder="Select Chain"
            data={['mainnet', 'Avalanche', 'Sonr']}
            value={props.chain}
            onChange={(event: any) => props.setChain(event.currentTarget.value)}
            rightSection={<IconChevronDown size={14} />}
            rightSectionWidth={40}
        />
        {props.chain === "Sonr" ? (
          <Sonr sonrTask={props.sonrTask} setSonrAlias={props.setSonrAlias} setSonrTask={props.setSonrTask} />
        ) : props.chain !== "" ? (
          <Evm
            setContractAddress={props.setContractAddress}
            setContractMethod={props.setContractMethod}
            setContractABI={props.setContractABI}
          />
        ) : null}
    </Box>
  );
}

export default Trigger;
