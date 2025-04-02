import React, { useState, useEffect } from "react";
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
  rank: number;
}

const TraitIncreaseModal: React.FC<TraitIncreaseModalProps> = ({
  open,
  onClose,
  rank,
}) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [selectedTrait, setSelectedTrait] = useState<string>("");

  // Find the archetype with rank === 0
  const archetypeWithRankZero = selectedCharacter?.archetypes?.find(
    (archetype) => archetype.rank === rank
  );

  // Set available traits from the archetype with rank === 0
  const availableTraits = archetypeWithRankZero?.archetype?.bonusTrait || [];

  // Set the first trait as the default value if available
  useEffect(() => {
    if (availableTraits.length > 0 && !selectedTrait) {
      setSelectedTrait(availableTraits[0]);
    }
  }, [availableTraits, selectedTrait]);

  const handleTraitChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTrait(event.target.value as string);
  };

  const handleSubmit = () => {
    if (selectedCharacter && selectedTrait && archetypeWithRankZero) {
      // Update the archetype's bonusTrait
      const updatedCharacter = { ...selectedCharacter };

      // Set the selected trait to the bonusTrait
      selectedCharacter.bonusTrait = selectedTrait;

      // Update the character after modifying the archetype
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
                  {availableTraits.map((trait) => (
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
