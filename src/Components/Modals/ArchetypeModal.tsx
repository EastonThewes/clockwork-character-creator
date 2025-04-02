import React, { useState } from "react";
import {
  Modal,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Button,
  Divider,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  martialArchetypes,
  sorcerousArchetypes,
} from "../../Models/GameInfo/Archetypes/Archetypes";
import {
  Archetype,
  MartialArchetype,
  SorcerousArchetype,
} from "../../Models/ArchetypeModel";
import { useCharacterContext } from "../../Context/CharacterContext";
import { ArcheTypeLevels, CharacterArchetype } from "../../Models/Character";

interface ArchetypeModalProps {
  open: boolean;
  onClose: () => void;
  rank: number;
}

const ArchetypeModal: React.FC<ArchetypeModalProps> = ({
  open,
  onClose,
  rank,
}) => {
  const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(
    null
  );

  const { selectedCharacter, updateCharacter } = useCharacterContext();

  const handleSelectArchetype = () => {
    if (selectedCharacter && selectedArchetype) {
      // Create the new archetype object
      const newArchetype: CharacterArchetype = {
        archetype: selectedArchetype, // selected archetype object
        selectedStyle: "", // placeholder value
        level: ArcheTypeLevels.initiate, // default value for level
        rank: rank, // the current rank, or the level of the character
        type: selectedArchetype.type, // the type of the selected archetype
      };

      // Check if an archetype with the same rank already exists
      const existingArchetypeIndex = selectedCharacter.archetypes.findIndex(
        (archetype) => archetype.rank === rank
      );

      if (existingArchetypeIndex !== -1) {
        // Replace the existing archetype if one with the same rank is found
        selectedCharacter.archetypes[existingArchetypeIndex] = newArchetype;

        // If this is the initial archetype, reset the bonus trait
        if (rank === 0) {
          selectedCharacter.bonusTrait = "";
        }
      } else {
        // Otherwise, push the new archetype into the array
        selectedCharacter.archetypes.push(newArchetype);
      }

      // Update the character after modification
      updateCharacter(selectedCharacter);

      // Close the selection dialog or window
      onClose();
    }
  };

  const handleClickArchetype = (archetype: Archetype) => {
    setSelectedArchetype(archetype);
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
          size={8}
          container
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 2,
          }}
        >
          {/* Left Side: Archetype List */}
          <Grid
            size={3}
            sx={{ borderRight: "1px solid #ddd", paddingRight: 2 }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Choose an Archetype
            </Typography>
            <List sx={{ flex: 1, overflowY: "auto" }}>
              {/* Martial Archetypes */}
              <Typography
                variant="subtitle2"
                sx={{ padding: 1, fontWeight: "bold" }}
                color="text.primary"
              >
                Martial Archetypes
              </Typography>
              {martialArchetypes.map((archetype, index) => (
                <ListItem key={`martial-${index}`} disablePadding>
                  <ListItemButton
                    //@ts-ignore
                    onClick={() => handleClickArchetype(archetype)}
                    selected={selectedArchetype?.name === archetype.name}
                  >
                    <Typography variant="body1" color="text.primary">
                      {archetype.name}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}

              <Divider sx={{ marginY: 1 }} />

              {/* Sorcerous Archetypes */}
              <Typography
                variant="subtitle2"
                sx={{ padding: 1, fontWeight: "bold" }}
                color="text.primary"
              >
                Sorcerous Archetypes
              </Typography>
              {sorcerousArchetypes.map((archetype, index) => (
                <ListItem key={`sorcerous-${index}`} disablePadding>
                  <ListItemButton
                    //@ts-ignore
                    onClick={() => handleClickArchetype(archetype)}
                    selected={selectedArchetype?.name === archetype.name}
                  >
                    <Typography variant="body1" color="text.primary">
                      {archetype.name}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* Select Button */}
            <Grid sx={{ padding: 1 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={!selectedArchetype}
                onClick={handleSelectArchetype}
              >
                Select
              </Button>
            </Grid>
          </Grid>

          {/* Right Side: Archetype Details */}
          <Grid
            size={9}
            sx={{ padding: 2, overflowY: "auto", maxHeight: "650px" }}
          >
            {selectedArchetype ? (
              <>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {selectedArchetype.name}
                </Typography>
                <Paper
                  sx={{
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{ mt: 2 }}
                  >
                    Bonus Traits:
                  </Typography>
                  <List>
                    {selectedArchetype.bonusTrait?.map((trait, index) => (
                      <ListItem key={index} disablePadding>
                        <Typography variant="body2" color="text.primary">
                          {trait}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>

                  {/* Show Martial Styles or Sorcerous Invocations */}
                  {selectedArchetype.type === "martial" ? (
                    <>
                      <Typography
                        variant="subtitle1"
                        color="text.primary"
                        sx={{ mt: 2 }}
                      >
                        Styles:
                      </Typography>
                      <Table size="small" sx={{ mt: 1 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                color: "text.primary",
                              }}
                            >
                              Style
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                color: "text.primary",
                              }}
                            >
                              Initiate
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                color: "text.primary",
                              }}
                            >
                              Adept
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                color: "text.primary",
                              }}
                            >
                              Master
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {(selectedArchetype as MartialArchetype).styles.map(
                            (style, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{ color: "text.primary" }}>
                                  {style.name}
                                </TableCell>
                                <TableCell sx={{ color: "text.primary" }}>
                                  {style.initiate.description}
                                </TableCell>
                                <TableCell sx={{ color: "text.primary" }}>
                                  {style.adept.description}
                                </TableCell>
                                <TableCell sx={{ color: "text.primary" }}>
                                  {style.master.description}
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="subtitle1"
                        color="text.primary"
                        sx={{ mt: 2 }}
                      >
                        Sorcerous Talents:
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        Initiate:{" "}
                        {
                          (selectedArchetype as SorcerousArchetype).initiate
                            .talent
                        }
                      </Typography>
                      <List>
                        {(
                          selectedArchetype as SorcerousArchetype
                        ).initiate.invocations.map((invocation, index) => (
                          <ListItem key={index} disablePadding>
                            <Typography variant="body2" color="text.primary">
                              {invocation.name} ({invocation.actionCost} AP):{" "}
                              {invocation.description}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Paper>
              </>
            ) : (
              <Typography variant="body1" color="text.primary">
                Select an archetype to see its details.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ArchetypeModal;
