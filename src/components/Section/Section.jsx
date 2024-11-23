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
    const [collapsed, setCollapsed]=useState(false)
    const [albums, setAlbums ]=useState([]);
    const fetchData=async()=>{
        const response=await axios.get(apiEndpoint);
        setAlbums(response.data);
    }

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
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>
      {!collapsed && 
      <Grid2 container spacing={3}>
      {albums.map((album) => (
            <Grid2 item xs={6} sm={4} md={3} key={album.id}>
              <MusicCard
                image={album.image} 
                albumName={album.title} 
                follows={`${album.follows} Followers`} 
              />
            </Grid2>
          ))}
    </Grid2>}
    </Box>
  )
}

export default Section