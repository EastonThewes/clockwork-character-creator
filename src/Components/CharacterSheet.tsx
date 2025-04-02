import { Box, Grid, Typography } from "@mui/material";
import { Character } from "../Models/Character";
import CharacterBuilderSteps from "./CharacterBuilderSteps";
import CharacterSheetInformation from "./CharacterSheetInformation";

interface CharacterSheetProps {
  character: Character; // Accepting a character as a prop
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid size={2}>
        <CharacterBuilderSteps character={character} />
      </Grid>
      <Grid size={10}>
        <CharacterSheetInformation character={character} />
      </Grid>
    </Grid>
  );
};

export default CharacterSheet;
