//   small note
// For the "All" tab (activeTab === 0):

// There’s no need to filter by genre because you want to display all songs.
// Thus, we directly set filteredSongs to be equal to songs (i.e., the entire list of songs fetched from the backend). You don’t need any filtering logic here.
// For other genre tabs:

// You want to filter the songs array based on the genre selected by the user. For this, you compare the genre.key from the song data with the selected genre's key (stored in activeTab).
import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import {
  Box,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import Carousel from '../Carousel/Carousel';

const Songs = () => {
  const [activeTab, setActiveTab] = useState(0); // To track the currently selected tab
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [songs, setSongs] = useState([]); // All songs raw
  const [filteredSongs, setFilteredSongs] = useState([]); // Filtered songs based on genre

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Fetch genres and songs data
  const fetchData = async () => {
    try {
      const [responseGenres, responseSongs] = await Promise.all([
        axios.get("https://qtify-backend-labs.crio.do/genres"),
        axios.get("https://qtify-backend-labs.crio.do/songs"),
      ]);

      setGenres([{ key: "all", label: "All" }, ...responseGenres.data.data]);
      setSongs(responseSongs.data); // Store all songs in state
    } catch (error) {
      console.error("Error fetching genres or songs:", error);
    }
  };

  // Filter songs when the active genre tab changes
  useEffect(() => {
    if (activeTab === 0) {
      // If "All" tab is selected, show all songs
      setFilteredSongs(songs);
    } else {
      // Filter songs by selected genre
      const selectedGenre = genres[activeTab].key;
      const filtered = songs.filter((song) => song.genre.key === selectedGenre);
      setFilteredSongs(filtered);
    }
  }, [activeTab, songs, genres]); // Re-run this when activeTab, songs, or genres change

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Typography variant="h5" gutterBottom>
        Songs
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} />
        ))}
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {/* Pass filtered songs to the Carousel */}
        <Carousel items={filteredSongs} genre={genres[activeTab].label} />
      </Box>
    </Box>
  );
};

export default Songs;
