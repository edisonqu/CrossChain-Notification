import { Box, Button, NativeSelect, Text, Input, Stack } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

function Task(props: any) {
    return (
      // Create a box with 3 inputs one for the API endpoint, one for the API key, and one menu for the API method
        <Box>
          <Stack>
            <NativeSelect style={{ marginTop: "20px" }}
                placeholder="Select API"
                data={["GET", "POST", "PUT", "DELETE"]}
                value={props.method}
                onChange={(event) => props.setApiMethod(event.currentTarget.value)}
                rightSection={<IconChevronDown size={14} />}
                rightSectionWidth={40}
            />
          <Input style={{ marginTop: "20px" }} onChange={(event: any) => props.setApiEndpoint(event.currentTarget.value)} placeholder="API Endpoint" />
          </Stack>
  </Box>
    );
  }
  export default Task;