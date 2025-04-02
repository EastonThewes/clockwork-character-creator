import React, { useState } from "react";
import {
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
} from "@mui/material";
import { MartialArchetype } from "../../Models/ArchetypeModel";
import { useCharacterContext } from "../../Context/CharacterContext";

interface StyleSelectionModalProps {
  open: boolean;
  onClose: () => void;
  rank: number; // Pass the rank to determine which archetype to pull from
}

const StyleSelectionModal: React.FC<StyleSelectionModalProps> = ({
  open,
  onClose,
  rank,
}) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const handleStyleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedStyle(event.target.value as string);
  };

  const handleSubmit = () => {
    if (selectedCharacter && selectedStyle) {
      // Update the character's selected style
      const updatedCharacter = { ...selectedCharacter };

      const archetypeWithRankZero = selectedCharacter?.archetypes?.find(
        (archetype) => archetype.rank === rank
      );

      if (archetypeWithRankZero)
        archetypeWithRankZero.selectedStyle = selectedStyle;

      updateCharacter(updatedCharacter);
      onClose(); // Close the modal after updating
    }
  };

  // Find the archetype with the specific rank
  const archetype = selectedCharacter?.archetypes?.find(
    (archetype) => archetype.rank === rank
  );

  // Ensure that the archetype is of type MartialArchetype
  const martialArchetype = archetype?.archetype as MartialArchetype | undefined;

  // Ensure that martialArchetype is defined and contains the styles for the given rank
  const styles = martialArchetype
    ? martialArchetype.styles // This assumes styles is an array of levels
    : [];

  return (
    <Modal open={open} onClose={onClose}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          display: "flex",
        }}
      >
        {/* Modal Container */}
        <Grid
          container
          size={8}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 2,
            maxHeight: "80vh",
            overflowY: "auto", // Allows scrolling if the content is too long
          }}
        >
          <Grid size={12}>
            <Typography variant="h6" mb={2}>
              Choose a Style
            </Typography>
          </Grid>

          {/* Style Selection */}
          <Grid size={12} mb={2}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: selectedStyle ? "primary.main" : "grey.500", // Label color when selected
                }}
              >
                Style
              </InputLabel>
              <Select
                value={selectedStyle}
                //@ts-ignore
                onChange={handleStyleChange}
                label="Style"
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: 1,
                  borderColor: selectedStyle ? "primary.main" : "grey.500",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: selectedStyle ? "primary.main" : "grey.500",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  padding: "10px",
                  "& .MuiSelect-icon": {
                    color: selectedStyle ? "primary.main" : "grey.500", // Arrow color when selected
                  },
                }}
              >
                {styles.map((style) => (
                  <MenuItem key={style.name} value={style.name}>
                    {style.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Display the Style Description */}
          <Grid size={12} mb={2}>
            {selectedStyle && (
              <Box>
                <Typography variant="h6" color="text.primary">
                  Initiate
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {
                    styles.find((style) => style.name === selectedStyle)
                      ?.initiate.description
                  }
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Adept
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {
                    styles.find((style) => style.name === selectedStyle)?.adept
                      .description
                  }
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Master
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {
                    styles.find((style) => style.name === selectedStyle)?.master
                      .description
                  }
                </Typography>
              </Box>
            )}
          </Grid>

          {/* Button Container */}
          <Grid container spacing={2} size={12}>
            <Grid size={6}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Select Style
              </Button>
            </Grid>
            <Grid size={6}>
              <Button variant="outlined" fullWidth onClick={onClose}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StyleSelectionModal;
