import { Worck } from './Worck/Worck';
import { Box } from 'Box';

export const App = () => {
  return (
    <Box
      as="main"
      p={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Worck />
    </Box>
  );
};
