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
  MenuItem,
} from "@mui/material";
import { useCharacterContext } from "../../Context/CharacterContext";

interface DisadvantageTraitModalProps {
  open: boolean;
  onClose: () => void;
}

const allTraits = ["Brawn", "Finesse", "Resolve", "Wits", "Presence"]; // List of all traits

const DisadvantageTraitModal: React.FC<DisadvantageTraitModalProps> = ({
  open,
  onClose,
}) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [selectedDisadvantage, setSelectedDisadvantage] = useState<string>("");

  const handleDisadvantageChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setSelectedDisadvantage(event.target.value as string);
  };

  const handleSubmit = () => {
    if (selectedCharacter && selectedDisadvantage) {
      // Update the character's disadvantage trait
      //   const updatedCharacter = { ...selectedCharacter };

      selectedCharacter.disadvantageTrait = selectedDisadvantage;

      updateCharacter(selectedCharacter);
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
          container
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            bosizehadow: 24,
            padding: 2,
            maxWidth: "400px",
          }}
        >
          <Grid size={12}>
            <Typography variant="h6" mb={2}>
              Select a Disadvantage Trait
            </Typography>
          </Grid>

          {/* Trait Selection */}
          <Grid size={12} mb={2}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: selectedDisadvantage ? "primary.main" : "grey.500",
                }}
              >
                Disadvantage Trait
              </InputLabel>
              <Select
                value={selectedDisadvantage}
                //@ts-ignore
                onChange={handleDisadvantageChange}
                label="Disadvantage Trait"
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: 1,
                  borderColor: selectedDisadvantage
                    ? "primary.main"
                    : "grey.500",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: selectedDisadvantage
                      ? "primary.main"
                      : "grey.500",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                  padding: "10px",
                  "& .MuiSelect-icon": {
                    color: selectedDisadvantage ? "primary.main" : "grey.500",
                  },
                }}
              >
                {allTraits.map((trait) => (
                  <MenuItem key={trait} value={trait}>
                    {trait}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Buttons */}
          <Grid container spacing={2} size={12}>
            <Grid size={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={!selectedDisadvantage}
              >
                Confirm
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

export default DisadvantageTraitModal;
