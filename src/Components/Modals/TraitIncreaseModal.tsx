import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { Archetype } from "../../Models/ArchetypeModel";
import { Character, TraitModifiers } from "../../Models/Character";
import { useCharacterContext } from "../../Context/CharacterContext";

interface TraitIncreaseModalProps {
  open: boolean;
  onClose: () => void;
  archetype: Archetype;
  rank: number;
}

const TraitIncreaseModal: React.FC<TraitIncreaseModalProps> = ({
  open,
  onClose,
  archetype,
  rank,
}) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [selectedTrait, setSelectedTrait] = useState<string>("");

  const handleTraitChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTrait(event.target.value as string);
  };

  const handleSubmit = () => {
    if (selectedCharacter && selectedTrait) {
      // Increase the selected trait by 1
      const updatedCharacter = { ...selectedCharacter };

      const modifier = new TraitModifiers();
      modifier[selectedTrait.toLowerCase()] = 1;

      updatedCharacter.archetypeTraitModifiers[Math.floor(rank / 2)] = modifier;
      updateCharacter(updatedCharacter);
      onClose(); // Close the modal after updating
    }
  };

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
          size={3}
          container
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography variant="h6" mb={2}>
                Choose a Trait to Increase
              </Typography>
            </Grid>

            <Grid size={12}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    color: selectedTrait ? "primary.main" : "grey.500", // Label color when selected
                  }}
                >
                  Trait
                </InputLabel>
                <Select
                  value={selectedTrait}
                  //@ts-ignore
                  onChange={handleTraitChange}
                  label="Trait"
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: 1,
                    borderColor: selectedTrait ? "primary.main" : "grey.500",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: selectedTrait ? "primary.main" : "grey.500",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    padding: "10px",
                    "& .MuiSelect-icon": {
                      color: selectedTrait ? "primary.main" : "grey.500", // Arrow color when selected
                    },
                  }}
                >
                  {archetype?.bonusTrait.map((trait) => (
                    <MenuItem key={trait} value={trait}>
                      {trait}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={6}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Increase Trait
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

export default TraitIncreaseModal;
