import * as React from 'react';

import {
  Chip,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function MusicCard({ image, albumName, chipContent }) {
  return (
    <Card sx={{ maxWidth: 159, }}>
      <CardActionArea>
      <CardMedia
  component="img"
  image={image}
  alt={albumName}
  sx={{
    objectFit: 'cover',
    width: '100%',
  }}
/>
        <CardContent  sx={{
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'flex-start',
        padding: "8px 2px",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        
      }}>
          <Typography
          variant="body1"
          sx={{ fontSize: "0.9rem", fontWeight: "600", textAlign: "center" }}
        >
          {albumName}
        </Typography>
        <Chip label={chipContent}   sx={{
          fontSize: '0.8rem',
          fontWeight: 'bold',
          backgroundColor: 'black',
          color: 'white',
          height: '24px',
          padding: "15px 0",
          gap: "1px"
        }}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// width: 159px;
// height: 205px;
// gap: 0px;
// border-radius: 10px 10px 0px 0px;
// opacity: 0px;
