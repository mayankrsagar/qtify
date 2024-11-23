import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import {
  Box,
  Button,
  Grid2,
  Typography,
} from '@mui/material';

import MusicCard from '../MusicCard/MusicCard';

const Section = ({title, apiEndpoint}) => {
    const [showAll, setShowAll] = useState(false);
    const [albums, setAlbums ]=useState([]);
    const albumsToShow = showAll ? albums : albums.slice(0, 7);
    const fetchData = async () => {
        try {
          const response = await axios.get(apiEndpoint);
          setAlbums(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };

    useEffect(()=>{
        fetchData();
        
    },[apiEndpoint])

  return (
        <Box sx={{ padding: "16px 24px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Button
          variant="text"
          sx={{ fontSize: "0.9rem", textTransform: "none" }}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box> 
      
      <Grid2 container spacing={5} >
      {albumsToShow.map((album) => (
            <Grid2 item xs={6} sm={4} md={3} key={album.id}>
              <MusicCard
                image={album.image} 
                albumName={album.title} 
                follows={`${album.follows} Followers`} 
              />
            </Grid2>
          ))}
    </Grid2>
    </Box>
  )
}

export default Section