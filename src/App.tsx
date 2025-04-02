import { useState } from "react";
import { CssBaseline, Box, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useCharacterContext } from "./Context/CharacterContext";
import CharacterSelection from "./Components/CharacterSelection";
import CharacterSheet from "./Components/CharacterSheet";
import { Character } from "./Models/Character";

const App = () => {
  const {
    addCharacter,
    loadCharacters,
    setSelectedCharacter,
    selectedCharacter,
  } = useCharacterContext(); // Get context functions
  const [showCharacterSheet, setShowCharacterSheet] = useState<boolean>(false); // Manage visibility of character sheet

  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false); // To track if we're loading characters

  const beep = (char: Character) => {
    console.log(char);
    setLoadingCharacters(false);
    setSelectedCharacter(char);
    setShowCharacterSheet(true);
  };

  // Handle creating a new character
  const handleCreateCharacter = () => {
    const newChar = new Character(); // Create new character
    addCharacter(newChar); // Add to context
    // setSelectedCharacter(newChar); // Set newly created character
    setShowCharacterSheet(true); // Show character sheet
  };

  // Handle loading characters from local storage
  const handleLoadCharacter = () => {
    setLoadingCharacters(true); // Start loading
    const savedCharacters: Character[] = JSON.parse(
      localStorage.getItem("characters") || "[]"
    );
    loadCharacters(savedCharacters); // Put into context
    setShowCharacterSheet(false); // Hide the current screen and show character selection screen
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!showCharacterSheet && !loadingCharacters ? (
        // Show initial screen with options to create or load character
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "background.default",
            color: "text.secondary",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Welcome to the Clockwork Court Character Builder
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Button variant="contained" onClick={handleCreateCharacter}>
              Create New Character
            </Button>
            <Button variant="contained" onClick={handleLoadCharacter}>
              Load Character
            </Button>
          </Box>
        </Box>
      ) : loadingCharacters ? (
        // Show loading indicator or character selection screen
        <CharacterSelection onCharacterSelect={beep} />
      ) : selectedCharacter ? (
        // Show the character sheet once a character is created or selected
        <CharacterSheet character={selectedCharacter} />
      ) : null}
    </ThemeProvider>
  );
};

export default App;
