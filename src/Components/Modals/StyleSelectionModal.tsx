import React, { useState } from "react";
import {
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Menu,
  Grid,
  Box,
} from "@mui/material";
import { MartialArchetype } from "../../Models/ArchetypeModel";
import { useCharacterContext } from "../../Context/CharacterContext";

interface StyleSelectionModalProps {
  open: boolean;
  onClose: () => void;
  archetype: MartialArchetype; // Archetype contains the styles
}

const StyleSelectionModal: React.FC<StyleSelectionModalProps> = ({
  open,
  onClose,
  archetype,
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

      updatedCharacter.selectedStyle = selectedStyle;
      updateCharacter(updatedCharacter);
      onClose(); // Close the modal after updating
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Grid
        container
        justifyContent="center"
        aligns="center"
        sx={{
          height: "100vh",
          display: "flex",
        }}
      >
        {/* Modal Container */}
        <Grid
          container
          size={12}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            bosizehadow: 24,
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
                {archetype?.styles.map((style) => (
                  <Menu key={style.name} value={style.name}>
                    {style.name}
                  </Menu>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Display the Style Description */}
          <Grid size={12} mb={2}>
            {selectedStyle && (
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {
                    archetype?.styles.find(
                      (style) => style.name === selectedStyle
                    )?.description
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
