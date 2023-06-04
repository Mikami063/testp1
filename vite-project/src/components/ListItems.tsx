import { ListItemText, ListItem, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  age: number;
  sex: string;
}

export default function ListItems({ name, age, sex }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    //console.log("here: ", name, age, sex);
    navigate("/user", { state: { name, age, sex } });
  };

  return (
    <div onClick={handleClick}>
      <Box
        sx={{ bgcolor: "#3f51b5", color: "white", borderRadius: 5, p: 2 }}
        key={name}
      >
        <ListItem>
          <ListItemText
            primary={
              <>
                <p>{name}</p>
                <p>Age: {age}</p>
                <p>Sex: {sex}</p>
              </>
            }
          />
          <Box justifyContent="center" alignItems="center">
            <Avatar sx={{ width: 56, height: 56 }} variant="square"></Avatar>
          </Box>
        </ListItem>
      </Box>
      <br></br>
    </div>
  );
}
