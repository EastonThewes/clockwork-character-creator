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
  Checkbox,
  ListItemText,
} from "@mui/material";
import { SorcerousArchetype } from "../../Models/ArchetypeModel";
import { useCharacterContext } from "../../Context/CharacterContext";
import { Invocation } from "../../Models/Character";

interface InvocationSelectionModalProps {
  open: boolean;
  onClose: () => void;
  rank: number; // Determines which archetype to pull from
}

const InvocationSelectionModal: React.FC<InvocationSelectionModalProps> = ({
  open,
  onClose,
  rank,
}) => {
  const { selectedCharacter, updateCharacter } = useCharacterContext();
  const [selectedInvocations, setSelectedInvocations] = useState<Invocation[]>(
    []
  );

  // Find the sorcerous archetypes for the given rank
  const sorcerousArchetypes = selectedCharacter?.archetypes?.filter(
    (archetype) => archetype.rank === rank && archetype.type === "sorcerous"
  );

  // Extract all available invocations from the sorcerous archetypes
  const availableInvocations = sorcerousArchetypes
    ?.flatMap(
      (archetype) =>
        (archetype.archetype as SorcerousArchetype).initiate.invocations
    )
    .filter((invocation, index, self) => self.indexOf(invocation) === index); // Remove duplicates

  // Handle selecting invocations (limit to 3)
  const handleInvocationChange = (event: any) => {
    const selected = event.target.value as Invocation[];
    if (selected.length <= 3) {
      setSelectedInvocations(selected);
    }
  };

  // Save selected invocations to the character
  const handleSubmit = () => {
    if (selectedCharacter && selectedInvocations.length === 3) {
      const updatedCharacter = { ...selectedCharacter };

      // Find the correct archetype and assign the selected invocations
      sorcerousArchetypes?.forEach((archetype) => {
        archetype.invocations = selectedInvocations;
      });

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
        sx={{ height: "100vh", display: "flex" }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 3,
            maxWidth: 500,
          }}
        >
          <Typography variant="h6" mb={2} color="text.primary">
            Choose Up to 3 Invocations
          </Typography>

          {availableInvocations && availableInvocations.length > 0 ? (
            <FormControl fullWidth>
              <InputLabel sx={{ color: "text.primary" }}>
                Invocations
              </InputLabel>
              <Select
                label="Invocations"
                multiple
                value={selectedInvocations}
                onChange={handleInvocationChange}
                renderValue={(selected) =>
                  selected.map((invocation) => invocation.name).join(", ")
                }
                sx={{
                  "& .MuiSelect-select": {
                    paddingRight: "32px", // Ensures dropdown arrow has space
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent", // Ensures the background is transparent
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black", // Outline color always black
                  },
                  "& .MuiInputLabel-root": {
                    color: "black", // Label color always black
                  },
                  "& .MuiSelect-icon": {
                    color: "black", // Dropdown arrow color
                  },
                }}
              >
                {availableInvocations.map((invocation, index) => (
                  //@ts-ignore
                  <MenuItem key={index} value={invocation}>
                    <Checkbox
                      sx={{ color: "text.primary" }}
                      checked={selectedInvocations.includes(invocation)}
                    />
                    <ListItemText primary={invocation.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Typography variant="body2" color="text.primary">
              No invocations available for this rank.
            </Typography>
          )}

          <Grid size={12} container spacing={2} mt={3}>
            <Grid size={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={selectedInvocations.length !== 3}
              >
                Confirm
              </Button>
            </Grid>
            <Grid size={6}>
              <Button variant="contained" fullWidth onClick={onClose}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default InvocationSelectionModal;
