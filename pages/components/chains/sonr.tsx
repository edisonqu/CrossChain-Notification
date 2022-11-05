import {
    NativeSelect,
        Button,
        Box,
        Stack,
        Input,
      } from "@mantine/core";
      import { IconChevronDown } from "@tabler/icons";
function Sonr(props: any) {
        return (
          <Box>
            {/* Add margin */}
            <Stack  >
                <NativeSelect
            style={{ marginTop: "20px" }}
                    placeholder="Select Event"
                    data={["Monitor Alias", "Create Shema", "Update Account"]}
                    value={props.sonrTask}
                    onChange={(event: any) => props.setSonrTask(event.currentTarget.value)}
                    rightSection={<IconChevronDown size={14} />}
                    rightSectionWidth={40}
                />
            </Stack>
            {props.sonrTask === "Monitor Alias"  && <Input
            style={{ marginTop: "20px" }}
             onChange={(event: any) => props.setSonrAlias(event.currentTarget.value)} placeholder={'Enter Alias ID'}/> }
    
          </Box>
        );
      }
        export default Sonr;