import { Avatar, Box } from "@mui/material";

interface Props {
  name: string;
  age: number;
  sex: string;
}

export default function UserInfoPage({ name, age, sex }: Props) {
  return (
    <Box justifyContent="space-between" display="flex" alignItems="center">
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
      </div>

      <Avatar sx={{ width: 56, height: 56 }} variant="square"></Avatar>
    </Box>
  );
}
