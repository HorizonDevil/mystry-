import { Box, Typography, IconButton, Divider, useTheme } from '@mui/material';
import { GitHub, Twitter, Instagram,Facebook, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        py: 6,
        px: { xs: 4, md: 8, lg: 16 },
        background: theme.palette.background.default,
        textAlign: 'center',
      }}
    >
      <Divider sx={{ mb: 4 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        <IconButton href="https://www.linkedin.com/in/ankusha-mukherjee-a160b72ab/" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://www.facebook.com/mili.mukherjee.794?rdid=sIM68P7l9c6c55Ta&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16fHbi3L8Z%2F#" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.instagram.com/xo_chick" target="_blank">
          <Instagram />
        </IconButton>
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Ankusha Mukherjee. All rights reserved.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Made with ❤️ by Abhishek
      </Typography>
    </Box>
  );
};

export default Footer;