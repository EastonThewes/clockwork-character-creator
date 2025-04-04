import { useEffect } from "react";
import { Character } from "../Models/Character";
import { useCharacterContext } from "../Context/CharacterContext";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface CharacterSheetInformationProps {
  character: Character; // Accepting a character as a prop
}

const CharacterSheetInformation: React.FC<
  CharacterSheetInformationProps
> = () => {
  const { selectedCharacter } = useCharacterContext();

  if (!selectedCharacter) {
    return <Typography variant="h6">No character selected</Typography>;
  }

  return (
    <Card sx={{ margin: 1, padding: 2, maxWidth: 600 }}>
      <CardContent>
        {/* Character Name */}
        <Typography variant="h5" gutterBottom>
          {selectedCharacter.name || "Unnamed Character"}
        </Typography>

        {/* Archetypes */}
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          Archetypes
        </Typography>
        {selectedCharacter.archetypes?.length > 0 ? (
          <List dense>
            {selectedCharacter.archetypes.map((archetype, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: "text.primary" }}>
                      {`${archetype.archetype.name} (Level ${archetype.level})`}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {`Type: ${archetype.type} | Rank: ${archetype.rank} | ${archetype.selectedStyle}`}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            No archetypes selected.
          </Typography>
        )}

        {/* Bonus Trait */}
        <Typography variant="h6">Bonus Trait</Typography>
        <Typography variant="body1">
          {selectedCharacter.bonusTrait || "None"}
        </Typography>

        {/* Disadvantage Trait */}
        <Typography variant="h6">Disadvantage Trait</Typography>
        <Typography variant="body1">
          {selectedCharacter.disadvantageTrait || "None"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterSheetInformation;
