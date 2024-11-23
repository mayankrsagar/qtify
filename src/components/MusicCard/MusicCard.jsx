import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';

export default function MusicCard({ image, albumName, follows }) {
  return (
    <Card sx={{ width: 159, height: 250, borderRadius: '12px', overflow: 'hidden' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={albumName}
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: 159, // Fixed height for the image
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              // whiteSpace:'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis', 
             
            }}
          >
            {albumName}
          </Typography>
          <Chip
            label={follows}
            sx={{
              fontSize: '0.8rem',
              fontWeight: 'bold',
              backgroundColor: 'black',
              color: 'white',
              height: '24px',
              padding: '5px 10px', // Adjusted padding for better appearance
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
