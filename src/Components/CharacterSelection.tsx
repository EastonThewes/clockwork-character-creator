import { Box, Button, Typography } from "@mui/material";
import { useCharacterContext } from "../Context/CharacterContext";
import { Character } from "../Models/Character";

interface CharacterSelectionProps {
  onCharacterSelect: (character: Character) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  onCharacterSelect,
}) => {
  const { characters } = useCharacterContext();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Select a Character</Typography>
      {characters.length === 0 ? (
        <Typography>No characters found. Please create one.</Typography>
      ) : (
        characters.map((char, index) => (
          <Box
            key={index}
            sx={{ mt: 2, p: 2, bgcolor: "background.paper", borderRadius: 2 }}
          >
            <Typography variant="h6" color="text.primary">
              {char.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onCharacterSelect(char)}
            >
              Select {char.name}
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CharacterSelection;
