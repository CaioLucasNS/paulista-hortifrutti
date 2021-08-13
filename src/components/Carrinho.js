import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from '@material-ui/core/TextField';

const Carrinho = () => {
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <>
    <div style={{ display: "block", padding: 50 }}>
          <div>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              
              <TextField 
                id="filled-number"
                label="Qtd"
                type="number"
                value={itemCount}
              />

              <Button
                onClick={() => {
                  setItemCount(itemCount + 1);
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
    </>
  );
}

export default Carrinho;
