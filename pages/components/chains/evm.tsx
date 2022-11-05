
import { Box, Stack, Input, Textarea} from "@mantine/core";

function Evm(props:any) {
  return (
    <Box>
      <Stack>
        <Input
          onChange={(event: any) => props.setContractAddress(event.currentTarget.value)}
          style={{ marginTop: "20px" }}
          placeholder="Contract Address"
        />
        <Input
        style={{ marginTop: "20px" }}
          onChange={(event: any) => props.setContractMethod(event.currentTarget.value)}
          placeholder="Contract Method"
        />
        <Textarea
        style={{ marginTop: "20px" }}
          onChange={(event: any) => props.setContractABI(event.currentTarget.value)}
          placeholder="Contract ABI"
        />
      </Stack>
    </Box>
  );
}
export default Evm;