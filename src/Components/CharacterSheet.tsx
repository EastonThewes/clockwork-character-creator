import { Box, Grid, Typography } from "@mui/material";
import { Character } from "../Models/Character";
import CharacterBuilderSteps from "./CharacterBuilderSteps";

interface CharacterSheetProps {
  character: Character; // Accepting a character as a prop
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <CharacterBuilderSteps character={character} />
    </Grid>
  );
};

export default CharacterSheet;
